const rentsContainer = document.querySelector('.rents-container');
const addForm = document.querySelector('.addCategory');
const updateForm = document.querySelector('.updateCategory');
const select = document.querySelector('.form-select');
const updateBtn = document.querySelector('.btn-update');
const mapDiv = document.getElementById('map');

// добавление жилья в избранное
if (rentsContainer) {
  rentsContainer.addEventListener('click', async (e) => {
    if (e.target.classList.contains('like')) {
      const card = e.target.closest('.card');
      const { rentid } = card.dataset;

      const res = await fetch(`/api/like/${rentid}`, {
        method: 'post',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({}),
      });
      const data = await res.json();
      const likeImg = card.querySelector('.like');
      if (data.message === 'success') {
        likeImg.src = 'images/like-fill.png';
      }
      if (data.message === 'delete') {
        if (rentsContainer.classList.contains('favorite')) {
          card.remove();
        }

        likeImg.src = '/images/like.png';
      }
    }
  });
}

// логика для поиска по категориям
if (select) {
  select.addEventListener('change', async (e) => {
    const cards = document.querySelectorAll('.card');
    if (select.value === 'Все виды жилья') {
      cards.forEach((e) => e.style.display = 'flex');
    } else {
      cards.forEach((el) => {
        if (!el.children[1].innerHTML.includes(select.value)) {
          el.style.display = 'none';
        } else {
          el.style.display = 'flex';
        }
      });
    }
  });
}

// Кнопка изменения профиля
if (updateBtn) {
  updateBtn.addEventListener('click', async (e) => {
    const res = await fetch('/api/profile/update', {
      method: 'put',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({}),
    });
  });
}

// Удаление жилья для админа
if (rentsContainer) {
  rentsContainer.addEventListener('click', async (e) => {
    if (e.target.classList.contains('btn-delete')) {
      const card = e.target.closest('.card');
      const { rentid } = card.dataset;
      const res = await fetch(`api/delete/${rentid}`, {
        method: 'delete',
      });
      const data = await res.json();
      if (data.message === 'success') {
        card.remove();
      }
    }
  });
}

// Изменение жилья для админа
if (updateForm) {
  updateForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const {
      action, method, title, description, category, images, price, location,
    } = e.target;
    if (!updateForm.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
      updateForm.classList.add('was-validated');
    }
    const reqData = new FormData();
    reqData.append('title', title.value);
    reqData.append('description', description.value);
    reqData.append('category', category.value);
    reqData.append('images', images.files[0]);
    reqData.append('price', price.value);
    reqData.append('location', location.value);
    const res = await fetch(action, {
      method: 'PUT',
      body: reqData,
    });
    const data = await res.json();
    if (data.message === 'failed') {
      e.preventDefault();
      e.stopPropagation();
      updateForm.reset();
      return;
    }
    if (data.message === 'success') {
      window.location.assign('/');
    }
  });
}

// Добавление жалья для админа
if (addForm) {
  addForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const {
      action, method, title, description, category, images, price, location,
    } = e.target;
    if (!addForm.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
      addForm.classList.add('was-validated');
    }
    const reqData = new FormData();
    reqData.append('title', title.value);
    reqData.append('description', description.value);
    reqData.append('category', category.value);
    reqData.append('images', images.files[0]);
    reqData.append('price', price.value);
    reqData.append('location', location.value);

    const res = await fetch(action, {
      method,
      body: reqData,
    });
    const data = await res.json();
    if (data.message === 'failed') {
      e.preventDefault();
      e.stopPropagation();
      addForm.reset();
      return;
    }
    if (data.message === 'success') {
      rentsContainer.insertAdjacentHTML('beforeend', data.html);
      addForm.reset();
    }
  });
}
let rentid;
if (mapDiv) {
  rentid = mapDiv.dataset.rentid;
}

async function initMap() {
  const res = await fetch(`/map/${rentid}`);
  const data = await res.json();

  const rent = new ymaps.Placemark(
    data.rent.location.split(',').map((e) => parseFloat(e)),
    {
      hintContent: data.rent.title,
      balloonContentBody: data.rent.price,
      balloonContentHeader: data.rent.title,
    },
    {
      iconLayout: 'default#image',
      iconImageHref: '/images/location.png',
      iconImageSize: [30, 30],
    },
  );

  const map = new ymaps.Map('map', {
    center: data.rent.location.split(',').map((e) => parseFloat(e)),
    zoom: 15,
    controls: ['zoomControl', 'searchControl', 'typeSelector', 'fullscreenControl'],
  });

  map.geoObjects.add(rent);
}
ymaps.ready(initMap);

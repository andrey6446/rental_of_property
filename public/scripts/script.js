const rentsContainer = document.querySelector('.rents-container');
const select = document.querySelector('.form-select');

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

const registartionForm = document.querySelector('.Registration');
const authorizationForm = document.querySelector('.Authorization');

if (registartionForm) {
  registartionForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const {
      action, method, userName, password, email,
    } = e.target;

    if (!registartionForm.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
      registartionForm.classList.add('was-validated');
      return;
    }

    const res = await fetch(action, {
      method,
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        userName: userName.value,
        password: password.value,
        email: email.value,
      }),
    });
    const data = await res.json();
    if (data.message === 'failed') {
      e.preventDefault();
      e.stopPropagation();
      registartionForm.reset();
      registartionForm.insertAdjacentHTML('beforebegin', data.html);
      return;
    }
    if (data.message === 'success') {
      window.location.assign('/');
    }
  });
}

if (authorizationForm) {
  authorizationForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const {
      action, method, password, email,
    } = e.target;
    if (!authorizationForm.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
      authorizationForm.classList.add('was-validated');
      return;
    }
    const res = await fetch(action, {
      method,
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        password: password.value,
        email: email.value,
      }),
    });
    const data = await res.json();
    if (data.message === 'failed') {
      e.preventDefault();
      e.stopPropagation();
      authorizationForm.reset();
      authorizationForm.insertAdjacentHTML('beforebegin', data.html);
      return;
    }
    if (data.message === 'success') {
      window.location.assign('/');
    }
  });
}

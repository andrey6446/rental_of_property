const React = require('react');
const Layout = require('./Layout');

function RegistrationPage({ title, user }) {
  const center = true;

  return (
    <Layout title={title} user={user} center={center}>
      <div className='reg'>
        <h2 className='text-center'>Введите данные для регистрации</h2>
        <form
          action='/api/auth/registration'
          method='post'
          className='column needs-validation Registration'
          noValidate
        >
          <div className='col-md-4 mx-auto'>
            <label htmlFor='validationCustom01' className='form-label'>Username</label>
            <input type='text' className='form-control' id='validationCustom01' name='userName' required />
            <div className='invalid-feedback'>
              Пожалуйста, введите имя польователя
            </div>
          </div>
          <div className='col-md-4 mx-auto'>
            <label htmlFor='validationCustom02' className='form-label'>Email</label>
            <input type='email' className='form-control' id='validationCustom02' name='email' required />
            <div className='invalid-feedback'>
              Пожалуйст введите email
            </div>
          </div>
          <div className='col-4 mx-auto'>
            <label htmlFor='validationCustom02' className='form-label'>Password</label>
            <input type='password' className='form-control' id='validationCustom03' name='password' required />
            <div className='invalid-feedback'>
              Пожалуйста введите пароль
            </div>
          </div>
          <div className='col-md-4 mx-auto text-center'>
            <button className='btn btn-primary btn-auth' type='submit'>Зарегистрироваться</button>
          </div>
        </form>
      </div>

    </Layout>
  );
}

module.exports = RegistrationPage;

const React = require('react');
const Layout = require('./Layout');

function AuthorizationPage({ title, user }) {
  const center = true;
  return (
    <Layout title={title} user={user} center={center}>
      <div className='auth'>
        <h2 className='text-center'>Введите данные для входа</h2>
        <form
          action='/api/auth/authorization'
          method='post'
          className='column needs-validation Authorization align-middle'
          noValidate
        >
          <div className='col-md-4 mx-auto'>
            <label htmlFor='validationCustom01' className='form-label'>Email</label>
            <input type='email' className='form-control' id='validationCustom01' name='email' required />
            <div className='invalid-feedback'>
              Пожалуйста введите email
            </div>
          </div>
          <div className='col-md-4 mx-auto'>
            <label htmlFor='validationCustom02' className='form-label'>Password</label>
            <input type='password' className='form-control' id='validationCustom02' name='password' required />
            <div className='invalid-feedback'>
              Пожалуйста введите пароль
            </div>
          </div>
          <div className='col-md-4 mx-auto text-center'>
            <button className='btn btn-primary btn-auth' type='submit'>Войти</button>
          </div>
        </form>
      </div>

    </Layout>
  );
}

module.exports = AuthorizationPage;

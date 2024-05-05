const React = require('react');
const Layout = require('./Layout');

function PageNotFound({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <section className='error-404-section section-padding'>
        <div className='error'>
          <img src='/images/error404.png' alt='notFound' />
        </div>
        <div className='error-message'>
          <h3>Ой! Страница не найдена!</h3>
          <p>К сожалению мы не можем найти запрошенную вами страницу. Возможно, вы неправильно ввели адрес.</p>
          <a href='/' className='btn btn-primary theme-btn'>Вернуться назад</a>
        </div>
      </section>
    </Layout>
  );
}

module.exports = PageNotFound;

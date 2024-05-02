const React = require('react');
const Layout = require('./Layout');

function RentPage({ title, user, rent }) {
  return (
    <Layout title={title} user={user}>
      <div className='container px-4 px-lg-5 my-5'>
        <div className='row gx-4 gx-lg-5 align-items-center'>
          <div className='col-md-6'><img className='card-img-top mb-5 mb-md-0' src={rent.images} alt='rent' /></div>
          <div className='col-md-6'>
            <div className='mb-1'>{rent.Category.name}</div>
            <h1 className='display-5 fw-bolder'>{rent.title}</h1>
            <div className='fs-5 mb-5'>
              <span>
                ₽
                {' '}
                {rent.price}
              </span>
            </div>
            <p className='lead'>{rent.description}</p>
            <a href='/' className='btn btn-primary'>Назад</a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

module.exports = RentPage;

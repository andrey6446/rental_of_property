const React = require('react');
const Layout = require('./Layout');

function Profile({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <div className='column gutters-sm'>
        <div className='mb-3 profile'>
          <div className='card'>
            <div className='card-body'>
              <div className='d-flex flex-column align-items-center text-center'>
                <img src={user.image} alt='user' className='rounded-circle profile-img' width='300' height='300' />
                <div className='mt-3'>
                  <h4>{user.userName}</h4>
                  <p className='text-secondary mb-1'>{user.email}</p>
                </div>
                <div className='row'>
                  <div className='col-sm-12'>
                    <button className='btn btn-primary btn-update' type='submit'>Редактировать</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Profile;

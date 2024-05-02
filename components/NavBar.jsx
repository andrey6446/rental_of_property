const React = require('react');

function NavBar({ user }) {
  return (
    <nav className='navbar-expand-lg bg-body-tertiary sticky-top navbar bg-dark border-bottom border-body'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='/'>
          <img src='/images/logo.svg' alt='Logo' width='30' height='24' className='d-inline-block align-text-middle' />
          ОБГ
        </a>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav d-flex justify-content-around w-100'>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='/'>Категории</a>
            </li>
            {user && (
            <li className='nav-item'>
              <a className='nav-link' href='/favorites'>Избранное</a>
            </li>
            )}
            {!user && (
            <li className='nav-item'>
              <a className='nav-link' href='/auth/registration'>Регистрация</a>
            </li>
            )}
            {user ? (
              <li className='nav-item'>
                <a className='nav-link' href='/auth/logout'>Выход</a>
              </li>
            ) : (
              <li className='nav-item'>
                <a className='nav-link' href='/auth/authorization'>Вход</a>
              </li>
            )}

            {user && (
            <li className='nav-item'>
              <a className='nav-link' href='/profile'>{user.userName}</a>
            </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

module.exports = NavBar;

const React = require('react');

function Footer() {
  return (
    <footer className='d-flex flex-wrap justify-content-around align-items-center py-3 my-4 border-top'>
      <div className='col-md-5 d-flex align-items-center justify-content-around'>
        <a href='/' className='mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1'>
          <img src='/images/footer-logo.svg' alt='Logo' width='30' height='30' className='d-inline-block align-text-middle' />
        </a>
        <span className='mb-2 mb-md-0 text-body-secondary'>© 2024 Andrey, Inc</span>
        <span className='mb-2 mb-md-0 text-body-secondary'>Санкт-Петербург, Лиговский проспект 140</span>
        <span className='mb-2 mb-md-0 text-body-secondary'><a href='mailto:andrey6446@ya.ru?subject=Сотрудничество&body=Привет' className='email'>andrey6446@ya.ru</a></span>

      </div>
      <ul className='nav col-md-4 justify-content-end list-unstyled d-flex'>
        <li className='ms-3'><a className='text-body-secondary' href='https://t.me/this_object' target='_blank' rel='noreferrer'><img src='/images/tg-logo.svg' alt='Logo' width='30' height='30' className='d-inline-block align-text-middle' /></a></li>
        <li className='ms-3'><a className='text-body-secondary' href='https://www.instagram.com/im_cursed/' target='_blank' rel='noreferrer'><img src='/images/inst-logo.svg' alt='Logo' width='30' height='30' className='d-inline-block align-text-middle' /></a></li>
        <li className='ms-3'><a className='text-body-secondary' href='https://github.com/andrey6446' target='_blank' rel='noreferrer'><img src='/images/git-logo.svg' alt='Logo' width='30' height='30' className='d-inline-block align-text-middle' /></a></li>
      </ul>
    </footer>
  );
}

module.exports = Footer;

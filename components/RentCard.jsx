const React = require('react');
const Layout = require('./Layout');

function RentCard({ rent, user }) {
  return (
    <div className='card'>
      <img src={rent.images} className='card-img-top' alt='rent' />
      <div className='card-body d-flex flex-column justify-content-end'>
        <h5 className='card-title'>{rent.title}</h5>
        <p className='card-text'>{rent.Category.name}</p>
        <p className='card-text price'>
          Цена за сутки:
          {' '}
          {rent.price}
          {' '}
          ₽
        </p>
        <div className='d-flex justify-content-between align-items-center'>
          <a href='#' className='btn btn-primary'>Подробнее</a>
          <a href='#'><img src='/images/like.png' alt='like' className='like' /></a>
        </div>

      </div>
    </div>
  );
}

module.exports = RentCard;

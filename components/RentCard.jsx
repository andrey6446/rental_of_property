const React = require('react');

function RentCard({ rent, user }) {
  const isFavorite = user && rent.RentLines.some((el) => el.userId === user.id);
  return (
    <div className='card' data-rentid={rent.id}>
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
          <a href={`/rent/${rent.id}/description`} className='btn btn-primary btn-desc'>Подробнее</a>
          {user && user.isAdmin && (
          <>
            <a href={`/update/${rent.id}/update`} className='btn btn-primary btn-desc'>Изменить</a>
            <button className='btn btn-primary btn-delete'>Удалить</button>
          </>
          )}
          {user && !user.isAdmin && (<button className='btn-like'><img src={`/images/${isFavorite ? 'like-fill.png' : 'like.png'}`} alt='like' className='like' /></button>)}
        </div>
      </div>
    </div>
  );
}

module.exports = RentCard;

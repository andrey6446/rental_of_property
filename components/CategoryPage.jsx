const React = require('react');
const Layout = require('./Layout');
const RentCard = require('./RentCard');

function MainPage({ title, user, rents }) {
  return (
    <Layout title={title} user={user}>
      <select className='form-select mx-auto' aria-label='Default select example'>
        <option selected>Все виды жилья</option>
        <option value='комната'>Команты</option>
        <option value='квартира'>Квартиры</option>
        <option value='дом'>Дома</option>
      </select>
      <div className='rents-container'>
        {rents.map((rent) => (
          <RentCard rent={rent} key={rent.id} user={user} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = MainPage;

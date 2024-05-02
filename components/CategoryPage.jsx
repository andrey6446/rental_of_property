const React = require('react');
const Layout = require('./Layout');
const RentCard = require('./RentCard');

function MainPage({
  title, user, rents, categories,
}) {
  return (
    <Layout title={title} user={user}>
      <select className='form-select mx-auto' aria-label='Default select example'>
        <option defaultValue>Все виды жилья</option>
        {categories.map((el) => (<option value={el.name} key={el.id}>{el.name}</option>))}
      </select>
      <div className='rents-container flex-wrap justify-content-around'>
        {rents.map((rent) => (
          <RentCard rent={rent} key={rent.id} user={user} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = MainPage;

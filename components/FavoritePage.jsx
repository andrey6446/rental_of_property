const React = require('react');
const Layout = require('./Layout');
const RentCard = require('./RentCard');

function FavoritePage({ title, rents, user }) {
  return (
    <Layout title={title} user={user}>
      <div className='rents-container flex-wrap justify-content-around favorite'>
        {rents.map((rent) => (
          <RentCard rent={rent} key={rent.id} user={user} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = FavoritePage;

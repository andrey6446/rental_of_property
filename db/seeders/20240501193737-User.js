/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      userName: 'Andrey',
      email: 'andrey6446@yandex.ru',
      password: '$2b$10$Ecflhtkg6BmOTbuAxJWgUe./dGWfdHaZ.pzZjgpJsRvxmnuuSDGKm',
      image: '/images/gypno.gif',
      isAdmin: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userName: 'Nastya',
      email: 'azarovan13@yandex.ru',
      password: '$2b$10$Ecflhtkg6BmOTbuAxJWgUe./dGWfdHaZ.pzZjgpJsRvxmnuuSDGKm',
      image: '/images/user-2.jpg',
      isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};

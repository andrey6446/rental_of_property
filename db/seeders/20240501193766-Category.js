/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [{
      name: 'Комната',
      rentId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Квартира',
      rentId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Дом',
      rentId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};

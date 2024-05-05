/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('RentLines', [{
      userId: 1,
      rentId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 1,
      rentId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 2,
      rentId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('RentLines', null, {});
  },
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'admin@gmail.com',
        password: '123456',
        firstName: 'dang',
        lastName: 'tu',
        address: 'VN',
        phonenumber: '0328943196',
        gender: '1',
        roleId: 'R1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'staff@gmail.com',
        password: '123456',
        firstName: 'dang',
        lastName: 'tu',
        address: 'VN',
        phonenumber: '0328947663',
        gender: '1',
        roleId: 'R2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'customer@gmail.com',
        password: '123456',
        firstName: 'dang',
        lastName: 'tu',
        address: 'VN',
        phonenumber: '0389136212',
        gender: '1',
        roleId: 'R3',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};

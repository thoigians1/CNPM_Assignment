'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Foodtypes', [
            {
                name: 'Gà rán',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Cơm chiên',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Gà chiên',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Cơm trộn',
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
        await queryInterface.bulkDelete('Foodtypes', null, {});
    }
};

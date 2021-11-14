'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Foodtypes', [
            {
                name: 'Cơm',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Canh',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Cháo',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Ăn kèm',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Hải sản',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Món gà và chim',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Đồ uống',
                createdAt: new Date(),
                updatedAt: new Date()
            },
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

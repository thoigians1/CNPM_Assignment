'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addColumn('Foods', 'foodtypeId',
            {
                type: Sequelize.INTEGER,
                allowNull: false,
                onUpdate: 'CASCADE',
                references: {
                    model: 'Foodtypes',
                    key: 'id',
                },
            });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeColumn('Foods', 'foodtypeId');
    },
};
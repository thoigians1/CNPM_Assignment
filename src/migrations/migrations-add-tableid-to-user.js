'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addColumn('Users', 'tableId',
            {
                type: Sequelize.INTEGER,
                allowNull: true,
                onUpdate: 'CASCADE',
                references: {
                    model: 'Tables',
                    key: 'id',
                },
            });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeColumn('Users', 'tableId');
    },
};
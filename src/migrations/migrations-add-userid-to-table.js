// 'use strict';
// module.exports = {
//     up: async (queryInterface, Sequelize) => {
//         await queryInterface.addColumn('Tables', 'userId',
//             {
//                 type: Sequelize.INTEGER,
//                 allowNull: true,
//                 onUpdate: 'CASCADE',
//                 references: {
//                     model: 'Users',
//                     key: 'id',
//                 },
//             });
//     },

//     down: async (queryInterface, Sequelize) => {
//         await queryInterface.removeColumn('Tables', 'userId');
//     },
// };
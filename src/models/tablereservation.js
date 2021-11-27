'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class TableReservations extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            TableReservations.belongsTo(models.Users, {
                foreignKey: 'userId',
                as: 'UserTables',
            })
        }
    };
    TableReservations.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tableId: DataTypes.INTEGER,
        timeStart: DataTypes.STRING,
        timeEnd: DataTypes.STRING,
        status: DataTypes.BOOLEAN,
    }, {
        sequelize,
        modelName: 'TableReservations',
    });
    return TableReservations;
};
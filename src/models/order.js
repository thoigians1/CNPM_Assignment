'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Orders extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Orders.hasMany(models.Contents, {
                foreignKey: 'OrderId',
                as: 'Contents'

            });
            Orders.belongsTo(models.Users, {
                foreignKey: 'userId',
                as: 'userOrder'
            });
        }
    };
    Orders.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        total: DataTypes.DECIMAL,
        status: DataTypes.BOOLEAN,
        paymentId: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Orders',
    });
    return Orders;
};
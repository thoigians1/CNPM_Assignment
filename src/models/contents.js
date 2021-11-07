'use strict';
const {
    Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Contents extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Contents.belongsTo(models.Orders, {
                foreignKey: 'orderId',
                targetKey: 'id',
            });
        }
    }
    Contents.init({
        foodId: DataTypes.INTEGER,
        foodName: DataTypes.STRING,
        foodImage: DataTypes.STRING,
        cost: DataTypes.DECIMAL,
        quantity: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Contents',
    });
    return Contents;
};
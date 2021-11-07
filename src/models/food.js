'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Foods extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Foods.belongsTo(models.Foodtypes, {
                foreignKey: 'foodtypeId',
                targetKey: 'id',
                // as: 'Foods'
            });
        }
    };
    Foods.init({
        name: DataTypes.STRING,
        cost: DataTypes.DECIMAL,
        image: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Foods',
    });
    return Foods;
};
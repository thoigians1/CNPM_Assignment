'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Foodtypes extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Foodtypes.hasMany(models.Foods, {
                foreignKey: 'foodtypeId',
                as: "Foods"
            });
        }
    };
    Foodtypes.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Foodtypes',
    });
    return Foodtypes;
};
'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Tables extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Tables.hasMany(models.Users, {
                foreignKey: 'tableId',
            });
        }
    };
    Tables.init({
        dateStart: DataTypes.DATE,
        dateEnd: DataTypes.DATE,
        status: DataTypes.BOOLEAN,
    }, {
        sequelize,
        modelName: 'Tables',
    });
    return Tables;
};
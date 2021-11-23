'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.hasMany(models.Orders, {
        foreignKey: 'userId',
      });
      Users.hasMany(models.TableReservations, {
        foreignKey: 'userId',
      });
    }
  };
  Users.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    address: DataTypes.STRING,
    phonenumber: DataTypes.STRING,
    gender: DataTypes.BOOLEAN,
    image: DataTypes.STRING,
    roleId: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};
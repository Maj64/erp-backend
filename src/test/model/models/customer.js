'use strict';
const {
  Model,
  DataTypes 
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Customer.init({
    customer_id: DataTypes.UUID,
    customer_name: DataTypes.STRING(255),
    contact_person_name: DataTypes.STRING(255),
    contact_email: DataTypes.STRING(255),
    phone_number: DataTypes.STRING(20),
    billing_address: DataTypes.STRING(255),
    shipping_address: DataTypes.STRING(255),
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};
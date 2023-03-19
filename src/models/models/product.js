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
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    product_name: DataTypes.STRING(255),
    description: DataTypes.TEXT,
    unit_price: DataTypes.DECIMAL(10,2),
    quantity_in_stock: DataTypes.INTEGER,
    removed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Customer;
};
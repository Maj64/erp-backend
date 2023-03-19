'use strict';
const {
  Model,
  DataTypes 
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init({
    order_id: DataTypes.UUID,
    order_date: DataTypes.DATE,
    customer_id: DataTypes.UUID,
    order_total: DataTypes.DECIMAL(10, 2),
    payment_status: DataTypes.STRING(20),
    payment_date: DataTypes.DATE,
    order_status: DataTypes.STRING(20),
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
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
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    order_id: DataTypes.UUID,
    product_id: DataTypes.UUID,
    quantity: DataTypes.INTEGER,
    unit_price: DataTypes.DECIMAL(10, 2),
    total_price: DataTypes.DECIMAL(10, 2),
    removed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Orderitem',
  });
  return Order;
};
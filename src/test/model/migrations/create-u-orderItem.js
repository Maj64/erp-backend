"use strict";
const { DataTypes } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Orderitem", {
      item_id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      order_id: {
        type: Sequelize.UUID,
        references: {
            model: 'Order',
            key: 'order_id'
        }
      },
      product_id: {
        type: Sequelize.UUID,
        references: {
          model: "Product",
          key: "product_id",
        },
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      unit_price: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2),
      },
      total_price: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Orderitem");
  },
};

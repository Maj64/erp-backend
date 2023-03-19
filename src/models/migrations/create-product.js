"use strict";
const { DataTypes } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Products", {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      product_name: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      description: {
        type: Sequelize.TEXT,
      },
      unit_price: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2),
      },
      quantity_in_stock: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      removed: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable("Products");
  },
};

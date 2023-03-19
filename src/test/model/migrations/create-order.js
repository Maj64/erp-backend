'use strict';
const { DataTypes } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Order', {
      order_id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
      },
      order_date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      customer_id: {
        type: Sequelize.UUID,
        references: {
          model: 'Customer',
          key: 'customer_id'
        }
      },
      order_total: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2)
      },
      payment_status: {
        allowNull: false,
        type: Sequelize.STRING(20),
        validate: {
          isIn: [['Pending', 'Paid']],
        }
      },
      payment_date: {
        type: Sequelize.DATE
      },
      order_status: {
        allowNull: false,
        type: Sequelize.STRING(20),
        validate: {
          isIn: [['Processing', 'Shipped', 'Delivered', 'Canceled']]
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Order');
  }
};
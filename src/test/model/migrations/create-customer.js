'use strict';
const { DataTypes } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Customer', {
      customer_id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
      },
      customer_name: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      contact_person_name: {
        type: Sequelize.STRING(255)
      },
      contact_email: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      phone_number: {
        type: Sequelize.STRING(20)
      },
      billing_address: {
        type: Sequelize.STRING(255)
      },
      shipping_address: {
        type: Sequelize.STRING(255)
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
    await queryInterface.dropTable('Customer');
  }
};
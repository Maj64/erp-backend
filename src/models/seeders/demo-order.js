"use strict";
const { v4: uuidv4 } = require('uuid');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // return queryInterface.bulkInsert("Order", [
    //   {
    //     order_id: uuidv4(),
    //     order_date: new Date(Date.UTC(2022, 2, 15)),
    //     customer_id: '310228cf-6ff0-4ecf-be0c-44ad7aee6a86',
    //     order_total: 500.00,
    //     payment_status: "Paid",
    //     payment_date: new Date(Date.UTC(2022, 2, 15)),
    //     order_status: "Shipped",
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    // ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

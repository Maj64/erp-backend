"use strict";
const { v4: uuidv4 } = require('uuid');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // return queryInterface.bulkInsert("Orderitem", [
    //   {
    //     item_id: uuidv4(),
    //     order_id: '967a3967-f41c-46ae-9833-9e485b8bd711',
    //     product_id: '9c257f42-d737-4055-896b-92c937bd3c81',
    //     quantity: 2,
    //     unit_price: 100.00,
    //     total_price: 200.00,
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

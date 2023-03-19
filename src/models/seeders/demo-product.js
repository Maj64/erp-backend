"use strict";
const { v4: uuidv4 } = require('uuid');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // return queryInterface.bulkInsert("Product", [
    //   {
    //     product_id: uuidv4(),
    //     product_name: "Product A",
    //     description: "This is product A.",
    //     unit_price: 100.00,
    //     quantity_in_stock: 10,
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

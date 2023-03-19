"use strict";
const { v4: uuidv4 } = require('uuid');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // return queryInterface.bulkInsert("Customer", [
    //   {
    //     customer_id: uuidv4(),
    //     customer_name: "John Smith",
    //     contact_person_name: "Jane Doe",
    //     contact_email: "jane.doe@email.com",
    //     phone_number: "555-555-5555",
    //     billing_address: "123 Main St, Anytown, USA",
    //     shipping_address: "123 Main St, Anytown, USA",
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

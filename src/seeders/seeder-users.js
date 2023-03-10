"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        email: "vtt2838@gmail.com",
        password: "1234",
        firstName: "Võ",
        lastName: "Thanh Tâm",
        address: "LA",
        gender: 1,
        roleId: "R1",
        phoneNumber: "0976402300",
        positionId: "P0",
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

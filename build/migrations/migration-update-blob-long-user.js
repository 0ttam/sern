"use strict";

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return Promise.all([queryInterface.changeColumn('Users', 'avatar', {
      type: Sequelize.BLOB('long'),
      allowNull: true
    })]);
  },
  down: function down(queryInterface, Sequelize) {
    return Promise.all([queryInterface.changeColumn('Users', 'avatar', {
      type: Sequelize.STRING,
      allowNull: true
    })]);
  }
};
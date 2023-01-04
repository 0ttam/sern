'use strict';

module.exports = {
  // email: DataTypes.STRING,
  //     password: DataTypes.STRING,
  //     firstName: DataTypes.STRING,
  //     lastName: DataTypes.STRING,
  //     address: DataTypes.STRING,
  //     gender: DataTypes.BOOLEAN,
  //     roleId: DataTypes.STRING,
  //     phoneNumber: DataTypes.STRING,
  //     positionId: DataTypes.STRING,
  //     image: DataTypes.STRING,
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'vtt2838@gmail.com',
      password:'1234',
      firstName: 'Võ',
      lastName: 'Thanh Tâm',
      address: 'LA',
      gender: 1,
      typeRole: 'ROLE',
      keyRole: 'R1',
      phoneNumber: '0976402300',
      positionId: '',
      image: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

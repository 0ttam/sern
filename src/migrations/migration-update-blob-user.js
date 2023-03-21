module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.changeColumn('Users', 'avatar', {
                type: Sequelize.BLOB,
                allowNull: true,
            }),
        ]);
    },

    down: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.changeColumn('Users', 'avatar', {
                type: Sequelize.STRING,
                allowNull: true,
            }),
        ]);
    },
};

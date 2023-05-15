'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('specialty', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            contentHTML: {
                allowNull: false,
                type: Sequelize.TEXT('long'),
            },
            contentMarkdown: {
                allowNull: false,
                type: Sequelize.TEXT('long'),
            },
            image: {
                type: Sequelize.BLOB('long'),
            },
            nameVi: {
                type: Sequelize.STRING,
            },
            nameEn: {
                allowNull: true,
                type: Sequelize.STRING,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('specialty');
    },
};

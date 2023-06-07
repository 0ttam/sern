'use strict';
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize;
const customConfig = {
    username: process.env.DB_USERNAME,
    password:
        process.env.DB_PASSWORD == 'null' ? null : process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false,
    query: { raw: true },
    timezone: '+07:00',
};
sequelize = new Sequelize(
    process.env.DB_DATABASE_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD == 'null' ? null : process.env.DB_PASSWORD,
    customConfig
);

fs.readdirSync(__dirname)
    .filter((file) => {
        return (
            file.indexOf('.') !== 0 &&
            file !== basename &&
            file.slice(-3) === '.js'
        );
    })
    .forEach((file) => {
        const model = require(path.join(__dirname, file))(
            sequelize,
            Sequelize.DataTypes
        );
        db[model.name] = model;
    });

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

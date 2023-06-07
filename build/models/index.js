'use strict';

require('dotenv').config();
var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var basename = path.basename(__filename);
var env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/../config/config.js')[env];
var db = {};
var sequelize;
var customConfig = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD == 'null' ? null : process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE_NAME,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  logging: false,
  query: {
    raw: true
  },
  timezone: '+07:00'
};
sequelize = new Sequelize(process.env.DB_DATABASE_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD == 'null' ? null : process.env.DB_PASSWORD, customConfig);
fs.readdirSync(__dirname).filter(function (file) {
  return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
}).forEach(function (file) {
  var model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
  db[model.name] = model;
});
Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
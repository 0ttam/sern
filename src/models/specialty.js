'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Specialty extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Specialty.hasMany(models.Doctor_Info, {
                foreignKey: 'specialtyId',
            });
        }
    }
    Specialty.init(
        {
            contentHTML: DataTypes.TEXT('long'),
            contentMarkdown: DataTypes.TEXT('long'),
            image: DataTypes.BLOB('long'),
            nameVi: DataTypes.STRING,
            nameEn: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'Specialty',
            freezeTableName: true,
        }
    );
    return Specialty;
};

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

//Extend from Model Class
class Category extends Model { }

//Create Model and define table columns and configuration
Category.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        category_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'category'
    }
);

module.exports = Category;
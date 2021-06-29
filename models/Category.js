const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Category extends Model {}

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
<<<<<<< HEAD
        freezeTableName: true,
=======
        freezeTablesName: true,
>>>>>>> 1476688adeaed59b9ece5e535cdc5bd55a3a24c3
        underscored: true,
        modelName: 'category'
    }
);

module.exports = Category;
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connections');

//Extend from sequelize model

class User extends Model {
    //Password Hash and instance data
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

//create User model
console.log('before users created');
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        }
    },
    {
        hooks: {
            async beforeCreate(newUserData) {
                newUsserData.password = await bcrypt.hash(newUserData.password, 10);
                return updatedUserData;
            },

            async beforeUpdate(updatedUserData) {
                updatedUserData.password = await bcrypt.hash(updatedUser.password, 10);
                return updatedUserData;
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);
console.log('after users created');

module.exports = User;
<<<<<<< HEAD
//
=======
//import models
const Item = require('./Item');
const User = require('./User');
const Category = require('./Category');
const { Model } = require('sequelize/types');

//create associations
Item.belongsTo(User,{
    foreignKey:'user_id'
});

User.hasMany(Items, {
    foreignKey: 'user_id',    
});

Item.belongsTo(Category, {
    foreignKey: 'category_id',
});

Category.hasMany(Item, {
    foreignKey: 'category_id',
});

//export models
Model.exports = { Item, User, Category };
>>>>>>> 6a32060211a0a2b1465cf6e8e0ba895514e3bacd

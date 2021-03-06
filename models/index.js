
//Import models
const User = require('./User');
const Category = require('./Category');
const Item = require('./Item');


//Create associations
Item.belongsTo(Category, {
    through: Category,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    foreignKey: 'category_id',
});

Category.hasMany(Item, {
    foreignKey: 'category_id',
});

Item.belongsTo(User, {
    through: User,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    foreignKey: 'user_id'
});

User.hasMany(Item, {
    foreignKey: 'user_id',
});


module.exports = { Item, User, Category };

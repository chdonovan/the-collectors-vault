const seedCategories = require('./category-seeds');
const seedUsers = require('./user-seeds');
const seedItems = require('./item-seeds');

const sequelize = require('../config/connections');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedCategories();
    console.log('\n----- CATEGORIES SEEDED -----\n');

    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');

    await seedItems();
    console.log('\n----- ITEMS SEEDED -----\n');

    process.exit(0);
};

seedAll();

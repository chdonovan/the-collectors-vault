const { Category } = require('../models');

const categoryData = [
    {
        category_name: 'Pokemon Cards',
    },
    {
        category_name: 'Sports Cards',
    },
    {
        category_name: 'Comic Books',
    },
    {
        category_name: 'Vinyl Records',
    },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
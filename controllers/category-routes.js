const router = require('express').Router();
const { Item, Category, User } = require('../models');

router.get('/', (req, res) => {
    Category.findAll({
        attributes: ['id', 'category_name']
    })
    .then(dbCategoryData => {
        const categories = dbCategoryData.map(category =>category.get({ plain: true}));
        res.render('category', {
            categories,
            loggedIn: true});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });

});

module.exports = router;
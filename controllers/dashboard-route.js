const router = require('express').Router();
const { Item, Category, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    Item.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'item_name',
            'item_description',
            'inventory',
            'category_id',
            'user_id'
        ],
        include: [
            {
                model: Category, 
                attributes: ['category_name']
            },
            {
                model: User, 
                attributes: ['username']
            }
        ]
    })
    .then(dbItemData => {
        const items = dbItemData.map(item =>item.get({ plain: true}));
        res.render('dashboard', {
            items,
            loggedIn: true});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/edit/:id', withAuth, (req, res) => {
    Item.findByPk(req.params.id, {
        attributes: [
            'id',
            'item_name',
            'item_description',
            'inventory',
            'category_id',
            'user_id'
        ],
        include: [
            {
                model: Category, 
                attributes: ['category_name']
            },
            {
                model: User, 
                attributes: ['username']
            }
        ]
    })
    .then (dbItemData => {
        if(dbItemData) {
            const item =dbItemData.get({plain: true });

            res.render('edit-item', {
                item, 
                loggedIn: true
            });
        } else {
            res.status(400).end();
        }
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

router.get('/', (req, res) => {
    Category.findAll({
        attributes: ['id', 'category_name']
    })
    .then(dbCategoryData => {
        const categories = dbCategoryData.map(category =>category.get({ plain: true}));
        res.render('dashboard', {
            categories,
            loggedIn: true});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });

});

module.exports = router;
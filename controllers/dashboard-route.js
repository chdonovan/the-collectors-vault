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
        const items = dbItemData.map(item = item.get({ plain: true }));
        res.render('dashboard', { posts, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
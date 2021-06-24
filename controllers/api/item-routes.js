const router = require('express').Router();
const { User, Item, Category } = require('../../models');

// GET All Items /api/collections
router.get('/', (req, res) => {
    Item.findAll({
        
        })
        .then(dbItemData => res.json(dbItemData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET Item by ID
router.get('/:id', (req, res) => {
    Item.findOne({
        where: {
            id: req.params.id
        }
    })
});

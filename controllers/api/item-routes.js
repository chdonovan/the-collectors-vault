const router = require('express').Router();
const { User, Item, Category } = require('../../models');
const withAuth = require('../../utils/auth');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

// GET All Items /api/collections
router.get('/', (req, res) => {
    Item.findAll({
        attributes: [
            'id',
            'item_name',
            'item_description',
            'inventory',
            'category_id',
            'item_image'
        ],
        include: [
            {
                model: Category,
                attributes: ['id', 'category_name']
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
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
        },
        attributes: [
            'id',
            'item_name',
            'item_description',
            'inventory',
            'category_id',
            'item_image'
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
            if (!dbItemData) {
                res.status(404).json({ message: 'No item found with this id' });
                return;
            }
            res.json(dbItemData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// POST Create an Item /api/items
// withAuth,
router.post('/', upload.single('item_image'), (req, res) => {
    console.log(req.file);
    Item.create({
        item_name: req.body.item_name,
        item_description: req.body.item_description,
        inventory: req.body.inventory,
        category_id: req.body.category_id,
        user_id: req.session.user_id,
        // item_image: req.body.item_image
        item_image: !!req.file ? req.file.path.replace(/\//g, 'ForwardSlash') : null
    })
        .then(dbItemData =>
            // req.session.save(() => {
            //     req.session.user_id = dbUserData.id;
            //     req.session.username = dbUserData.username;
            //     req.session.loggedIn = true;

            //     res.json(dbUserData);
            // });
            res.json(dbItemData))
        // })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// PUT Update Items by ID /api/items/1
router.put('/:id', withAuth, (req, res) => {
    Item.update(
        {
            item_name: req.body.item_name,
            item_description: req.body.item_description,
            inventory: req.body.inventory,
            category_id: req.body.category_id
        },
        {
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: Category,
                    attributes: ['username']
                }
            ]
        },
    )
        .then(dbItemData => {
            if (!dbItemData) {
                res.status(404).json({ message: 'No item found with this id' });
                return;
            }
            res.json(dbItemData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// DELETE Delete Items /api/items/1
router.delete('/:id', withAuth, (req, res) => {
    Item.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbItemData => {
            if (!dbItemData) {
                res.status(404).json({ message: 'No item found with this id' });
                return;
            }
            res.json(dbItemData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;

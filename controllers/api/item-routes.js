const router = require('express').Router();
const { User, Item, Category } = require('../../models');
const withAuth = require('../../utils/auth');
const multer = require('multer');


//Set up store for uploaded files
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
    }
});

//Set up filters for file types
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
        cb(null, true);
    } else {
        cb(new Error('Only images are allowed'), false)
    }
}

//Set up upload property limits
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

// GET all items
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

// GET item by ID
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

// CREATE a new item
router.post('/', upload.single('item_image'), (req, res) => {
    console.log(req.file);
    Item.create({
        item_name: req.body.item_name,
        item_description: req.body.item_description,
        inventory: req.body.inventory,
        category_id: req.body.category_id,
        user_id: req.session.user_id,
        item_image: !!req.file ? req.file.path.replace(/\//g, 'ForwardSlash') : null
    })
        .then(dbItemData =>
            res.json(dbItemData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// UPDATE item by id
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

// DELETE item by id
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

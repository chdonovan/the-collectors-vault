const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const collectionRoutes = require('./item-routes.js');

router.use('/users', userRoutes);
router.use('/items', itemRoutes);

module.exports = router;
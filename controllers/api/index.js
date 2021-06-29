const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const itemRoutes = require('./item-routes.js');
const categoryRoutes = require('./category-routes');

router.use('/users', userRoutes);
router.use('/items', itemRoutes);
router.use('/categories', categoryRoutes);
const apiRoutes = require('./api');
router.use('/api', apiRoutes);

module.exports = router;
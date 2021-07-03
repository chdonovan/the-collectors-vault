const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const itemRoutes = require('./item-routes.js');
const categoryRoutes = require('./category-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/items', itemRoutes);
router.use('/categories', categoryRoutes);
router.use('/comments', commentRoutes);


module.exports = router;

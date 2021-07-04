const router = require('express').Router();

//import routes
const userRoutes = require('./user-routes.js');
const itemRoutes = require('./item-routes.js');
const categoryRoutes = require('./category-routes');

//set up the route path
router.use('/users', userRoutes);
router.use('/items', itemRoutes);
router.use('/categories', categoryRoutes);


module.exports = router;

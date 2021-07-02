const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-route');
const categoryRoutes = require('./category-routes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/category', categoryRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-route');
<<<<<<< HEAD
=======
const categoryRoutes = require('./category-routes');
>>>>>>> cc96f1180e36f65886f82076b38c440d932ccec9

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
<<<<<<< HEAD
=======
router.use('/category', categoryRoutes);
>>>>>>> cc96f1180e36f65886f82076b38c440d932ccec9

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;
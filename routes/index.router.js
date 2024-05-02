const router = require('express').Router();

const categoryViewRouter = require('./views/category.view.router');
const authViewRouter = require('./views/auth.view.router');
const favoriteViewRouter = require('./views/favorite.view.router');
const authApiRouter = require('./api/auth.api.router');
const categoryApiRouter = require('./api/category.api.router');

router.use('/auth', authViewRouter);
router.use('/favorites', favoriteViewRouter);
router.use('/', categoryViewRouter);

router.use('/api', categoryApiRouter);
router.use('/api/auth', authApiRouter);

module.exports = router;

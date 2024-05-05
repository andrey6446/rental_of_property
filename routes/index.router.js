const router = require('express').Router();

const categoryViewRouter = require('./views/category.view.router');
const authViewRouter = require('./views/auth.view.router');
const favoriteViewRouter = require('./views/favorite.view.router');
const profileViewRouter = require('./views/profile.view.router');
const notFoundPage = require('./views/notfound.view.router');
const mapViewRouter = require('./views/map.view.router');
const profileApiRouter = require('./api/profile.api.router');
const authApiRouter = require('./api/auth.api.router');
const categoryApiRouter = require('./api/category.api.router');

router.use('/auth', authViewRouter);
router.use('/favorites', favoriteViewRouter);
router.use('/profile', profileViewRouter);
router.use('/map', mapViewRouter);
router.use('/', categoryViewRouter);

router.use('/api', categoryApiRouter);
router.use('/api/auth', authApiRouter);
router.use('/api/profile', profileApiRouter);

router.use('/*', notFoundPage);

module.exports = router;

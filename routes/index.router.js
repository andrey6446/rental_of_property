const router = require('express').Router();

const mainViewRouter = require('./views/category.view.router');
const authViewRouter = require('./views/auth.view.router');
const authApiRouter = require('./api/auth.api.router');

router.use('/', mainViewRouter);
router.use('/auth', authViewRouter);

router.use('/api/auth', authApiRouter);

module.exports = router;

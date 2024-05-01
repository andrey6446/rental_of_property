const router = require('express').Router();

const mainViewRouter = require('./views/main.view.router');

router.use('/', mainViewRouter);

module.exports = router;

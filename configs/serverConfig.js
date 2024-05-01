const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const removeHeaders = require('../middlewares/removeHeaders');
const ssr = require('../middlewares/ssr');
const verifyAccessToken = require('../middlewares/verifyJWT');

const serverConfig = (app) => {
  app.use(express.static(path.join(__dirname, '..', 'public')));
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(express.json());
  app.use(removeHeaders);
  app.use(ssr);
  app.use(verifyAccessToken);
};

module.exports = serverConfig;

/* eslint-disable import/no-extraneous-dependencies */
const bcrypt = require('bcrypt');
const router = require('express').Router();
const jwtConfig = require('../../configs/jwtConfig');
const { User } = require('../../db/models');
const generateToken = require('../../utils/authutils');

router.post('/registration', async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    let userInDb;
    userInDb = await User.findOne({ where: { email } });
    if (userInDb) {
      const html = '<div class="alert alert-warning alert-dismissible fade show" role="alert">Такой пользователь уже зарегистрирован<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
      res.status(400).json({ message: 'failed', html });
      return;
    }
    const hashPassword = await bcrypt.hash(password, 10);
    userInDb = await User.create({
      userName,
      email,
      password: hashPassword,
      image: '/images/profile-default.png',
      isAdmin: false,
    });
    const user = await User.findOne({
      where: { id: userInDb.id },
      attributes: ['id', 'userName', 'email', 'image', 'isAdmin'],
    });
    if (user) {
      const { accessToken, refreshToken } = generateToken({ user });
      res.locals.user = user;
      res
        .cookie('access', accessToken, {
          maxAge: jwtConfig.access.expiresIn,
          httpOnly: true,
        })
        .cookie('refresh', refreshToken, {
          maxAge: jwtConfig.refresh.expiresIn,
          httpOnly: true,
        })
        .status(201)
        .json({ message: 'success' });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.post('/authorization', async (req, res) => {
  try {
    const { email, password } = req.body;
    const userInDb = await User.findOne({ where: { email } });
    if (userInDb) {
      const isDone = await bcrypt.compare(password, userInDb.password);
      if (isDone) {
        const user = await User.findOne({
          where: { id: userInDb.id },
          attributes: ['id', 'userName', 'email', 'image', 'isAdmin'],
        });
        if (user) {
          const { accessToken, refreshToken } = generateToken({ user });
          res.locals.user = user;
          res
            .cookie('access', accessToken, {
              maxAge: jwtConfig.access.expiresIn,
              httpOnly: true,
            })
            .cookie('refresh', refreshToken, {
              maxAge: jwtConfig.refresh.expiresIn,
              httpOnly: true,
            })
            .status(201)
            .json({ message: 'success' });
        }
      }
    } else {
      const html = '<div class="alert alert-warning alert-dismissible fade show" role="alert">Не верный логин или пароль<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
      res.status(400).json({ message: 'failed', html });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;

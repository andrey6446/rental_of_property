const router = require('express').Router();

const AuthorizationPage = require('../../components/AuthorizationPage');
const RegistrationPage = require('../../components/RegistrationPage');

router.get('/registration', (req, res) => {
  try {
    const { user } = res.locals;
    res.send(
      res.renderComponent(RegistrationPage, { title: 'Registration Page', user }),
    );
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.get('/authorization', (req, res) => {
  try {
    const { user } = res.locals;
    res.send(
      res.renderComponent(AuthorizationPage, { title: 'Authorization Page', user }),
    );
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.get('/logout', (req, res) => {
  try {
    res.status(200).clearCookie('refresh').clearCookie('access').redirect('/');
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;

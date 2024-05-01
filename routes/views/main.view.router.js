const router = require('express').Router();
const MainPage = require('../../components/MainPage');

router.get('/', async (req, res) => {
  try {
    const { user } = res.locals;
    res.status(200).send(res.renderComponent(MainPage, { title: 'Main page', user }));
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;

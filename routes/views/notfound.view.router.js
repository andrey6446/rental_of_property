const router = require('express').Router();
const PageNotFound = require('../../components/PageNotFound');

router.get('*', async (req, res) => {
  try {
    const { user } = res.locals;
    res.status(200).send(res.renderComponent(PageNotFound, { title: 'Not Found', user }));
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;

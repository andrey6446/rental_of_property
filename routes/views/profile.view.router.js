const router = require('express').Router();
const Profile = require('../../components/Profile');

router.get('/', async (req, res) => {
  try {
    const { user } = res.locals;
    res.send(
      res.renderComponent(Profile, { title: 'Profile Page', user }),
    );
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;

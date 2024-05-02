const router = require('express').Router();
const FavoritePage = require('../../components/FavoritePage');
const { Category, Rent, RentLine } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const { user } = res.locals;
    const allRents = await Rent.findAll({ include: [Category, RentLine] });
    const rents = allRents.filter((el) => el.RentLines.find((e) => e.userId === user.id));
    if (rents) {
      res.status(200).send(res.renderComponent(FavoritePage, {
        title: 'Favorite page', user, rents,
      }));
      return;
    }
    res.status(400).json({ message: 'failed' });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;

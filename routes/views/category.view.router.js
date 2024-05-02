const router = require('express').Router();
const CategoryPage = require('../../components/CategoryPage');
const { Category, Rent } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const { user } = res.locals;
    const rents = await Rent.findAll({ include: Category });
    console.log(rents);
    if (rents) {
      res.status(200).send(res.renderComponent(CategoryPage, { title: 'Category page', user, rents }));
      return;
    }
    res.status(400).json({ message: 'failed' });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;

const router = require('express').Router();
const CategoryPage = require('../../components/CategoryPage');
const RentPage = require('../../components/RentPage');
const RentUpdatePage = require('../../components/RentUpdatePage');
const { Category, Rent, RentLine } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const { user } = res.locals;
    const rents = await Rent.findAll({ include: [Category, RentLine] });
    const categories = await Category.findAll({ attributes: ['name'] });
    if (rents) {
      res.status(200).send(res.renderComponent(CategoryPage, {
        title: 'Category page', user, rents, categories,
      }));
      return;
    }
    res.status(400).json({ message: 'failed' });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.get('/rent/:rentId/description', async (req, res) => {
  try {
    const { user } = res.locals;
    const { rentId } = req.params;
    const rent = await Rent.findOne({ where: { id: rentId }, include: Category });
    if (rent) {
      res.status(200).send(res.renderComponent(RentPage, {
        title: 'Category page', user, rent,
      }));
      return;
    }
    res.status(400).json({ message: 'failed' });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.get('/update/:rentId/update', async (req, res) => {
  try {
    const { user } = res.locals;
    const { rentId } = req.params;
    const rent = await Rent.findOne({ where: { id: rentId }, include: Category });
    if (rent) {
      res.status(200).send(res.renderComponent(RentUpdatePage, {
        title: 'Rent update page', user, rent,
      }));
      return;
    }
    res.status(400).json({ message: 'failed' });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;

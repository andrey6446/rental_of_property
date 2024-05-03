const router = require('express').Router();
const { Rent } = require('../../db/models');

router.get('/:rentId', async (req, res) => {
  try {
    const { rentId } = req.params;
    const rent = await Rent.findOne({ where: { id: rentId } });
    console.log(rent);
    if (rent) { res.status(200).json({ message: 'success', rent }); }
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

module.exports = router;

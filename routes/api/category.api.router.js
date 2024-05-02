const router = require('express').Router();
const { RentLine } = require('../../db/models');

router.post('/like/:rentId', async (req, res) => {
  const { rentId } = req.params;
  const { id } = res.locals.user;
  let like;
  const x = await RentLine.findOne({ where: { userId: id, rentId } });
  if (x) {
    like = RentLine.destroy({ where: { userId: id, rentId } });
    if (like) {
      res.status(200).json({ message: 'delete' });
    }
  } else {
    like = await RentLine.create({ userId: id, rentId });
    if (like) {
      res.status(200).json({ message: 'success' });
    }
  }
});

module.exports = router;

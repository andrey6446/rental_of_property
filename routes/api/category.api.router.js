/* eslint-disable import/no-extraneous-dependencies */
const router = require('express').Router();
const multer = require('multer');
const { where } = require('sequelize');
const { RentLine, Rent, Category } = require('../../db/models');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'public/images');
  },
  filename(req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

// Удаление жилья для админа
router.delete('/delete/:rentId', async (req, res) => {
  const { rentId } = req.params;
  await Rent.destroy({ where: { id: rentId } });
  await RentLine.destroy({ where: { rentId } });
  await Category.destroy({ where: { rentId } });
  res.status(200).json({ message: 'success' });
});

// Редактирование жилья для админа
router.put('/update/:rentId/update', upload.single('images'), async (req, res) => {
  try {
    const { rentId } = req.params;
    const {
      title, description, price, category, location,
    } = req.body;
    const newFileUrl = `/images/${req.file.originalname}`;
    const rent = await Rent.update({
      title, description, images: newFileUrl, price, category, location,
    }, { where: { id: rentId } });
    if (rent[0]) {
      res.status(201).json({ message: 'success' });
      return;
    }
    res.status(400).json({ message: 'failed' });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

// Добавление жилья для админа
router.post('/add', upload.single('images'), async (req, res) => {
  try {
    const {
      title, description, price, category, location,
    } = req.body;
    const newFileUrl = `/images/${req.file.originalname}`;
    const rent = await Rent.create({
      title, description, images: newFileUrl, price, category, location,
    });
    if (rent) {
      const currRent = await Rent.findOne({
        where: { id: rent.id },
      });
      const cat = await Category.create({ rentId: currRent.id, name: category });
      const currentRent = await Rent.findOne({
        where: { id: rent.id },
        include: Category,
      });
      if (currentRent && cat) {
        console.log(currentRent);
        const html = `<div class="card" data-rentid=${currentRent.id}><img src=${currentRent.images} class="card-img-top" alt="rent"><div class="card-body d-flex flex-column justify-content-end"><h5 class="card-title">${currentRent.title}</h5><p class="card-text">${currentRent.Category.name}</p><p class="card-text price">Цена за сутки: ${currentRent.price} ₽</p><div class="d-flex justify-content-between align-items-center"><a href="/${currentRent.id}" class="btn btn-primary btn-desc">Подробнее</a><a href=/update/${rent.id} class='btn btn-primary btn-desc'>Изменить</a><button class='btn btn-primary btn-delete'>Удалить</button></div></div></div>`;
        res.status(201).json({ message: 'success', html });
      }
    } else {
      res.status(400).json({ message: 'failed' });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

// Избранное добавить / удалить
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

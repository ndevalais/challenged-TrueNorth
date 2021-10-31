const express = require('express');
const service = require("./service");
const DEFAULT = 3;

const router = express.Router();

router.get('/', async (req, res) => {
  const quantity = parseInt(req.query.quantity) || DEFAULT; 
  const data = await service.getTasks(quantity);
  res.json(data);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product 2',
    price: 2000
  });
});

module.exports = router;
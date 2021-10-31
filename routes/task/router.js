const express = require('express');
const service = require("./service");
const DEFAULT = 3;

const router = express.Router();

router.get('/', async (req, res) => {
  const quantity = parseInt(req.query.quantity) || DEFAULT; 
  const data = await service.getTasks(quantity);
  res.json(data);
});

router.put('/', (req, res) => {
  const body = req.body
  res.json({
    message: 'updated',
    data: body
  });
});

module.exports = router;
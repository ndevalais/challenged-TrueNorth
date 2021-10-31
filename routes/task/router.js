/**
 * Modulo de enrutamiento de Task
 */
const express = require('express');
const service = require("./service");
const DEFAULT = 3;

const router = express.Router();

router.get('/', async (req, res) => {
  const quantity = parseInt(req.query.quantity) || DEFAULT; 
  const data = await service.getTasks(quantity);
  res.json(data);
});

router.put('/', async (req, res) => {
  const body = req.body
  const data = await service.updateTask(body);
  res.json({
    message: 'updated',
    data
  });
});

module.exports = router;
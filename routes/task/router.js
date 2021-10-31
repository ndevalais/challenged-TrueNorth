/**
 * Router task module
 */
const express = require('express');
const service = require("./service");
const DEFAULT = 3;

const router = express.Router();

/**
 * Router GET Task
 */
router.get('/', async (req, res, next) => {
  try {
    const quantity = parseInt(req.query.quantity) || DEFAULT; 
    const data = await service.getTasks(quantity);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

/**
 * Router PUT Task
 */
router.put('/', async (req, res, next) => {
  try {
    const body = req.body;
    if (!body.uuid) throw new Error('UUID is empty, please enter a valid UUID');
    if (!body.task) throw new Error('Task is empty, please enter a valid Task');
    const data = await service.updateTask(body);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
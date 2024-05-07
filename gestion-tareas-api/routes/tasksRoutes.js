const express = require('express');
const router = express.Router();
const {
  listTasks,
  createTask,
  deleteTask,
  updateTask,
} = require('../controllers/tasksController');

router.get('/', listTasks);
router.post('/', createTask);
router.delete('/:id', deleteTask);
router.put('/:id', updateTask);

module.exports = router;

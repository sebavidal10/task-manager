const Task = require('../models/Tasks');

const listTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).send();
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err);
  }
};

const updateTask = async (req, res) => {
  const { completed } = req.body;

  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { completed },
      { new: true }
    );
    if (!task) {
      return res.status(404).send();
    }
    res.status(200).json(task);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  listTasks,
  createTask,
  deleteTask,
  updateTask,
};

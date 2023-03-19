// src/controllers/taskController.js
const taskService = require('../services/taskService');

const getTasks = async (req, res) => {
  try {
    const tasks = await taskService.getAllTasks();
    res.json({ status: 'success', data: tasks });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to fetch tasks' });
  }
};

module.exports = {
  getTasks,
};

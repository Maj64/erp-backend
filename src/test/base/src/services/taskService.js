// src/services/taskService.js
const Task = require('../models/taskModel');

const getAllTasks = async () => {
  return await Task.find({});
};

module.exports = {
  getAllTasks,
};

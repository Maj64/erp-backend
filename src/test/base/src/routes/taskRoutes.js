// src/routes/taskRoutes.js
const express = require('express');
const taskController = require('../controllers/taskController');

const router = express.Router();

router.get('/', taskController.getTasks);

module.exports = router;

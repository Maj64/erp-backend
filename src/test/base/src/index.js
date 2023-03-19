    // src/index.js
    const express = require('express');
    const taskRoutes = require('./routes/taskRoutes');
    const connectDatabase = require('./config/database');
    const errorHandler = require('./src/middlewares/errorHandler');
    const dotenv = require('dotenv');

    // Load environment variables from the .env file
    dotenv.config();

    // Initialize the Express app
    const app = express();
    const port = process.env.PORT || 3000;

    // Connect to the database
    connectDatabase();

    // Set up middleware
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // Set up routes
    app.use('/api/tasks', taskRoutes);

    // Error handling middleware
    app.use(errorHandler);

    // Start the server
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });

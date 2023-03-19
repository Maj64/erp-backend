// index.js
const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Set up static files serving
app.use(express.static(path.join(__dirname, 'public')));

// // Serve the 'uploads' directory as a static resource
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

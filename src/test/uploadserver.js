const express = require('express');
const multer = require('multer');

const app = express();

// configure multer
const upload = multer({
  dest: 'uploads/' // the directory to store uploaded files
});

// route for file upload
app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded successfully!');
});

// start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});

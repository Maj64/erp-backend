// index.js
// ...

// File upload route
app.post("/upload", upload.single("file"), (req, res) => {
  res.send({
    status: "success",
    message: "File uploaded successfully",
    file: req.file,
  });
});

// ...

// index.js
// ...

// Route to fetch the list of uploaded files
app.get('/files', (req, res) => {
  const uploadsDir = path.join(__dirname, 'uploads');
  fs.readdir(uploadsDir, (err, files) => {
    if (err) {
      return res.status(500).json({ status: 'error', message: 'Failed to read files' });
    }

    // Filter files to only include images and files
    const validFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return (
        ext === '.jpg' ||
        ext === '.jpeg' ||
        ext === '.png' ||
        ext === '.gif' ||
        ext === '.bmp' ||
        ext === '.pdf' ||
        ext === '.doc' ||
        ext === '.docx' ||
        ext === '.ppt' ||
        ext === '.pptx' ||
        ext === '.xls' ||
        ext === '.xlsx' ||
        ext === '.txt' ||
        ext === '.zip' ||
        ext === '.rar'
      );
    });

    res.json({ status: 'success', files: validFiles });
  });
});

// ...


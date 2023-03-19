const express = require('express');
const { createSale } = require('./middleware/sale');

const app = express();

app.use(express.json());

// Route to handle sale creation
app.post('/sales', createSale);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

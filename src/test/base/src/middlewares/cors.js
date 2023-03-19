const cors = require('cors');

const corsOptions = {
  origin: '*', // or specify allowed origins, e.g., ['http://example.com', 'http://localhost:3000']
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
};

const corsMiddleware = cors(corsOptions);

module.exports = corsMiddleware;

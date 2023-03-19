const { validationResult, checkSchema } = require('express-validator');

const requestValidationMiddleware = (schema) => [
  checkSchema(schema),
  (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
    res.status(400).json({ status: 'error', message: 'Validation failed', errors: errors.array() });
  },
];

module.exports = requestValidationMiddleware;

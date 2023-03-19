const _ = require('lodash');

const toCamelCase = (str) => {
  return _.camelCase(str);
};

const toSnakeCase = (str) => {
  return _.snakeCase(str);
};

module.exports = {
  toCamelCase,
  toSnakeCase,
};

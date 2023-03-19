const _ = require('lodash');

const pick = (object, keys) => {
  return _.pick(object, keys);
};

const omit = (object, keys) => {
  return _.omit(object, keys);
};

module.exports = {
  pick,
  omit,
};

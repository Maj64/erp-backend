const _ = require('lodash');

const chunkArray = (array, size) => {
  return _.chunk(array, size);
};

const removeDuplicates = (array) => {
  return _.uniq(array);
};

module.exports = {
  chunkArray,
  removeDuplicates,
};
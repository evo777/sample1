'use strict';

let flatten = function(arrays) {
  if (!Array.isArray(arrays)) {
    return arrays;
  }
  return arrays.reduce((output, array) => {
    return output.concat(flatten(array));
  }, []);
};

module.exports = {flatten};

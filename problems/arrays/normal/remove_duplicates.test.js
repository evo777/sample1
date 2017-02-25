'use strict';

var solution = require('./remove_duplicates.js');
var assert = require('chai').assert;

describe('Arrays', function() {
  describe('normal', function() {
    describe('remove duplicates', function() {

      it('should return an array with duplicates removed', function() {
        assert.deepEqual(solution.removeDuplicates([1,2,3,3,4,5,6,6,7,8,9,9]), [1,2,3,4,5,6,7,8,9]);
      });

    });
  });
});

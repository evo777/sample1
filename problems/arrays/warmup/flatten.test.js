'use strict'

let solution = require('./flatten.js'),
    assert = require('chai').assert;

describe('Arrays', () => {
  describe('warmup', () => {
    describe('flatten', () => {
      it('flattens every subarray within an array', () => {
        assert.deepEqual(solution.flatten([1,2,[3,4,[5,6,7],8],9]), [1,2,3,4,5,6,7,8,9]);
      });
    });
  });
});

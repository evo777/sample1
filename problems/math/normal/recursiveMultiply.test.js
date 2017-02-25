'use strict';

const solution = require('./recursiveMultiply.js');
const assert = require ('chai').assert;

describe('math', function() {
  describe('normal', function() {
    describe('recursiveMultiply', function (){

      it('should multiply two positive integers correctly', function () {
        assert.equal(solution.recursiveMultiply(2, 2), 4);
        assert.equal(solution.recursiveMultiply(8, 3), 24);
        assert.equal(solution.recursiveMultiply(12, 10), 120);
        assert.equal(solution.recursiveMultiply(22, 3), 66);
        assert.equal(solution.recursiveMultiply(5, 27), 135);
      });

      // Extra credit
      // Remove 'x' to activate test
      xit('should multiply two negative integers correctly', function () {
        assert.equal(solution.recursiveMultiply(-2, -2), 4);
        assert.equal(solution.recursiveMultiply(-8, -3), 24);
        assert.equal(solution.recursiveMultiply(-12, -10), 120);
        assert.equal(solution.recursiveMultiply(-22, -3), 66);
        assert.equal(solution.recursiveMultiply(-5, -27), 135);
      });

      xit('should multiply a positive and negative integer correctly', function () {
        assert.equal(solution.recursiveMultiply(2, -2), -4);
        assert.equal(solution.recursiveMultiply(-8, 3), -24);
        assert.equal(solution.recursiveMultiply(12, -10), -120);
        assert.equal(solution.recursiveMultiply(-22, 3), -66);
        assert.equal(solution.recursiveMultiply(5, -27), -135);
      });

    });
  });
});

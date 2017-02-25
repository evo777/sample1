'use strict';

const solution = require('./isPrimeNumber.js');
const assert = require('chai').assert;

describe('math', function() {
  describe('normal', function() {
    describe('isPrimeNumber', function() {
      
      it('detects a prime number', function() {
        assert.equal(solution.isPrimeNumber(97), true);
        assert.equal(solution.isPrimeNumber(2), true);
        assert.equal(solution.isPrimeNumber(7), true);
      });

      it('detects not a prime number', function() {
        assert.equal(solution.isPrimeNumber(4), false);
        assert.equal(solution.isPrimeNumber(22), false);
        assert.equal(solution.isPrimeNumber(51), false);
      });
    });
  });
});

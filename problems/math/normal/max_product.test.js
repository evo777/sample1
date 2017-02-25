'use strict';

const solution = require('./max_product.js'),
    assert = require ('chai').assert;

describe('math', function() {
  describe('normal', function() {
    describe('maxProduct', function (){

      it('finds the largest product of 6', function () {
        assert.equal(solution.maxProduct(6), 9);
      });

      it('finds the largest product of 9', function () {
        assert.equal(solution.maxProduct(9), 27);
      });

      it('finds the largest product of 20', function() {
        assert.equal(solution.maxProduct(20), 1458);
      });

      it('finds the largest product of 100', function() {
        assert.equal(solution.maxProduct(100), 7412080755407364);
      });

    });
  });
});

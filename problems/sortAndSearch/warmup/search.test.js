'use strict';

var assert = require('chai').assert;
var search = require('./search');
var searchRecursive = search.searchRecursive;
var searchIterative = search.searchIterative;
var sinon = require('sinon');

describe('sortAndSearch', function() {
  describe('warmup', function() {
    describe('iterative search', function() {
      it ('should find an element in an array and return its index', function() {
        const nums = [1,2,3,4,5,6,7,8,9,10];
        assert.deepEqual(searchIterative(nums, 0), -1);
        assert.deepEqual(searchIterative(nums, 1), 0);
        assert.deepEqual(searchIterative(nums, 2), 1);
        assert.deepEqual(searchIterative(nums, 3), 2);
      });

      it('should return -1 for empty arrays', function() {
        assert.deepEqual(searchIterative([]), -1);
      });
      
      it('should not be recursive', function() {
        var spy = sinon.spy(searchIterative);
        var nums = [1,6,4,2,7,0];
        spy(nums);
        assert.isTrue(spy.calledOnce);
      });
    });
    describe('recursive search', function() {
      it ('should find an element in an array and return its index', function() {
        const nums = [1,2,3,4,5,6,7,8,9,10];
        assert.deepEqual(searchRecursive(nums, 0), -1);
        assert.deepEqual(searchRecursive(nums, 1), 0);
        assert.deepEqual(searchRecursive(nums, 2), 1);
        assert.deepEqual(searchRecursive(nums, 3), 2);
      });

      it('should return -1 for empty arrays', function() {
        assert.deepEqual(searchRecursive([], 1), -1);
      });
    });
  });
});

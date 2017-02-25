'use strict';

var assert = require('chai').assert;
var sort = require('./sort');
var sinon = require('sinon');

function randomArray(n, arr) {
  arr = arr || [];
  if (n === 0) {
    return arr
  }
  const newElement = Math.floor(Math.random() * 1000);
  return randomArray(n - 1, arr.concat(newElement));
}

describe('sortAndSearch', function() {
  describe('warmup', function() {
    describe('sort', function() {
      it ('should leave a sorted array of numbers unchanged', function() {
        const nums = [1,2,3,4,5];
        const originalNums = nums.slice();
        assert.deepEqual(sort(nums), originalNums);
      });

      it('should sort any unsorted array of integers', function() {
        for (var i = 0; i < 100; i++) {
          var array = randomArray(10);
          var sortedArray = array.slice().sort(function(a, b) { return a - b });
          assert.deepEqual(sort(array), sortedArray);
        }
      });

      it('should gracefully handle arays of duplicates', function() {
        var array = [1,1,1,1,1,1];
        var originalArray = array.slice();
        assert.deepEqual(sort(array), originalArray);
      });

      it('should do nothing to an empty array', function() {
        assert.deepEqual(sort([]), []);
      });
      
      it('should not use the native Array.prototype.sort method', function() {
        var spy = sinon.spy(Array.prototype, 'sort');   
        var nums = [1,6,4,2,7,0];
        sort(nums);
        assert.isFalse(spy.called);
        Array.prototype.sort.restore();
      });
    });
  });
});

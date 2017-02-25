'use strict';

var solution = require('./reverse_array_in_place.js'),
    assert = require ('chai').assert,
    array = [1, 2, 3, 4, 4, 5];

describe('Arrays',function(){
  describe('warmup', function(){
    describe('reverseArrayInPlace', function (){

      var reversed = solution.reverseArrayInPlace(array);

      it('can return the same array', function () {
        assert.equal(reversed, array);
      });

      it('can return the array with the same elements in reverse order', function () {
        assert.deepEqual(reversed, [5, 4, 4, 3, 2, 1]);
      });

    });
  });
});

'use strict';

var solution = require('./search_sorted_matrix.js'),
    assert = require ('chai').assert;

describe('Arrays',function(){
  describe('normal', function(){
    describe('Search Sorted Matrix', function (){

      it('can return the correct index of the inputted number', function () {
        assert.deepEqual(solution.searchSortedMatrix([
          [1,2,3],
          [4,5,6],
          [7,8,9]
        ], 8), [2,1]);
      });  

      it('can return the null if the inputted number is not in the matrix', function () {
        assert.deepEqual(solution.searchSortedMatrix([
          [1,2,3],
          [4,5,6],
          [7,8,9]
        ], 22), null);
      });  
    });
  });
});
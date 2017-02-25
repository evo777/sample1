'use strict';

var solution = require('./spiral_print.js'),
    assert = require ('chai').assert;

describe('Arrays',function(){
  describe('normal', function(){
    describe('spiralPrint', function (){

      it('can print square matrix in spiral order', function () {
        assert.deepEqual(solution.spiralPrint([
          [1,2,3],
          [4,5,6],
          [7,8,9]
        ]), [1, 2, 3, 6, 9, 8, 7, 4, 5]);
      });

      it('can print a tall matrix in spiral order', function (){
        assert.deepEqual(solution.spiralPrint([
          [  1,  2,  3],
          [  4,  5,  6],
          [  7,  8,  9],
          [ 10, 11, 12],
          [ 13, 14, 15],
          [ 16, 17, 18]
        ]), [1 , 2, 3, 6, 9, 12, 15, 18, 17, 16, 13, 10, 7, 4, 5, 8, 11, 14]);
      });

      it('can print a wide matrix in spiral order', function (){
        assert.deepEqual(solution.spiralPrint([
          [  1,  2,  3,  4,  5,  6],
          [  7,  8,  9, 10, 11, 12],
          [ 13, 14, 15, 16, 17, 18]
        ]), [1, 2, 3, 4, 5, 6, 12, 18, 17, 16, 15, 14, 13, 7, 8, 9, 10, 11]);
      });

    });
  });
});

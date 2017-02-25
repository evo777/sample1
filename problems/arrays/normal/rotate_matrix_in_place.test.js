'use strict';

var solution = require('./rotate_matrix_in_place.js'),
    assert = require('chai').assert;

describe('Arrays',function(){
  describe('normal', function(){
    describe('rotateMatrixInPlace', function(){

      it('should rotate a square matrix clockwise in place', function(){
        var matrix = [
          [1,2,3,4],
          [5,6,7,8],
          [9,'A','B','C'],
          ['D','E','F','G']
        ];
        solution.rotataMatrixInPlace(matrix);

        assert.deepEqual(matrix, [ 
          ['D',9,5,1],
          ['E','A',6,2],
          ['F','B',7,3],
          ['G','C',8,4]
        ]);

      });

    });
  });
});
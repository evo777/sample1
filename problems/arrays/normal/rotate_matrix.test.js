'use strict';

var solution = require('./rotate_matrix.js'),
    assert = require('chai').assert;

describe('Arrays',function(){
  describe('normal', function(){
    describe('rotateMatrix', function(){

      it('should rotate a square matrix 90 degrees clockwise', function(){
        assert.deepEqual(solution.rotateMatrix([
          [1,2,3,4],
          [5,6,7,8],
          [9,'A','B','C'],
          ['D','E','F','G']
        ]),[
          ['D',9,5,1],
          ['E','A',6,2],
          ['F','B',7,3],
          ['G','C',8,4]
        ]);
      });

      xit('should rotate a rectangular matrix 90 degrees clockwise', function(){
        assert.deepEqual(solution.rotateMatrix([
          [1,2,3,4],
          [5,6,7,8],
          [9,'A','B','C']
        ]),[
          [9,5,1],
          ['A',6,2],
          ['B',7,3],
          ['C',8,4]
        ]);
      });

      xit('should rotate a square matrix 90 degrees counter-clockwise', function(){
        assert.deepEqual(solution.rotateMatrix([
          [1,2,3,4],
          [5,6,7,8],
          [9,'A','B','C'],
          ['D','E','F','G']
        ], -1),[
          [4,8,'C','G'],
          [3,7,'B','F'],
          [2,6,'A','E'],
          [1,5,9,'D'],
        ]);
      });

      xit('should rotate a rectangular matrix 90 degrees counter-clockwise', function(){
        assert.deepEqual(solution.rotateMatrix([
          [1,2,3,4],
          [5,6,7,8],
          [9,'A','B','C']
        ], -1),[
          [4,8,'C'],
          [3,7,'B'],
          [2,6,'A'],
          [1,5,9],
        ]);
      });

    });
  });
});

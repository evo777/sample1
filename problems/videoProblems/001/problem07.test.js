'use strict';

var convertToLCD = require('./problem07.js'),
    assert = require ('chai').assert;

describe('problem set 001',function(){
  describe('problem 7', function(){
    describe('convertToLCD', function (){

      it('converts to least common denominator', function(){
        var lst = [[1, 2], [1, 3], [1, 4]];
        assert.deepEqual([[6, 12], [4, 12], [3, 12]], convertToLCD(lst));
      });

    });
  });
});

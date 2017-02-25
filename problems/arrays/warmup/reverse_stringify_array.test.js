'use strict';

var solution = require('./reverse_stringify_array.js'),
    assert = require ('chai').assert;

describe('Arrays',function(){
  describe('warmup', function(){
    describe('reverseStringifyArray', function (){

      it('can reverse and stringify an array', function () {
        assert.equal(solution.reverseStringifyArray([1,2,3,4,4,5]), '5,4,4,3,2,1');
      });

    });
  });
});

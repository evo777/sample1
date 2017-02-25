'use strict';

var solution = require('./every.js'),
    assert = require ('chai').assert;

describe('Arrays',function(){
  describe('warmup', function(){
    describe('every', function (){

      it('knows when every element in an array passes a truth test', function () {
        assert.equal(solution.every([1,2,3,4,4,5], function(element){
          return typeof element === 'number';
        }), true);
      });

      it('knows when not every element in an array passes a truth test', function (){
        assert.equal(solution.every([1,2,3,4,'hello!'], function (element){
          return typeof element === 'number';
        }), false);
      });

    });
  });
});

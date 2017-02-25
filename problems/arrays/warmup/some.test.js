'use strict';

var solution = require('./some.js'),
    assert = require ('chai').assert;

describe('Arrays',function(){
  describe('warmup', function(){
    describe('some', function (){

      it('knows when all elements in an array pass a truth test', function () {
        assert.equal(solution.some([1,2,3,4,4,5], function(element){
          return typeof element === 'number';
        }), true);
      });

      it('knows when some elements in an array pass a truth test', function (){
        assert.equal(solution.some([1,2,3,4,'hello!'], function (element){
          return typeof element === 'number';
        }), true);
      });

      it('knows when no elements in an array pass a truth test', function (){
        assert.equal(solution.some(['hi!','hello!', 'what\'s up?'], function (element){
          return typeof element === 'number';
        }), false);
      });

      it('works on empty arrays', function (){
        assert.equal(solution.some([], function (element){
          return typeof element === 'number';
        }), false);
      });

    });
  });
});

'use strict';

var assert = require('chai').assert;
var MinStack = require ('./minStack');

describe('stacks', function(){
  describe('normal', function(){
    describe('minStack',function(){

      var minStack;
      beforeEach(function(){
        minStack = new MinStack();
        for(var i = 0; i < 999999; i ++){
          minStack.push(Math.random());
        }
      });

      it('should push in constant time',function (done){
        this.timeout(400);
        for(var i = 0; i < 999999; i ++){
          minStack.push(Math.random());
        }
        done();
      });

      it('should pop in constant time', function(done){
        this.timeout(200);
        while(minStack.size() > 0){
          minStack.pop();
        }
        done();
      });

      it('should get the minimum value in constant time', function(done){
        this.timeout(1750);
        var previousMin = -Infinity;
        while(minStack.size() > 0){
          assert.isAtMost(previousMin, minStack.getMin());
          previousMin = minStack.getMin();
          minStack.pop();
        }
        done();
      });
    });
  });
});

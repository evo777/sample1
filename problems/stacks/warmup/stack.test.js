'use strict';

var Stack = require('./stack.js');
var assert = require('chai').assert;

describe('Stacks', function() {
  describe('warmup', function() {
    describe('stack', function () {

      it('should return the size of the stack', function() {
        var stack = new Stack();
        assert.equal(stack.size(), 0, 'stack size before push');
        stack.push(1);
        stack.push(2);
        assert.equal(stack.size(), 2, 'stack size after 2 push calls');
      });

      it('should add values with push', function() {
        var stack = new Stack();
        for (var i = 0; i < 10; i++) {
          var value = Math.random() * 100;
          stack.push(value);
        }
        assert.equal(stack.size() , 10, 'stack Size after push');
      });

      it('should return the most recently added value with pop', function() {
        var stack = new Stack();
        stack.push(1);
        stack.push(2);
        var popped = stack.pop();
        assert.equal(popped, 2, 'most recently pushed value');
      });

    });
  });
});
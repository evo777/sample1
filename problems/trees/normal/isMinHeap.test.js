'use strict';

const solution = require('./isMinHeap.js'),
      assert = require('chai').assert;

describe('min heaps', function() {
  describe('normal', function() {
    describe('checking for min heaps', function() {

      describe('isMinHeap', function() {
        it('should return true for a tree whose nodes are less than its immediate children', function() {
          const tree = new solution.Tree('1');
          tree.addChild(2);
          tree.addChild(3);
          tree.children[0].addChild(6);
          tree.children[0].addChild(7);
          tree.children[1].addChild(10);
          tree.children[1].addChild(12);
          const result = solution.isMinHeap(tree);
          assert.isTrue(result);
        });

        it('should return false for trees with children not added from left to right', function() {
          const tree = new solution.Tree(3);
          tree.addChild(4);
          tree.addChild(5);
          tree.children[1].addChild(6);
          const result = solution.isMinHeap(tree);
          assert.isFalse(result);
        });

        it('should return false for trees whose nodes are greater than its immediate children', function() {
          const tree = new solution.Tree(5);
          tree.addChild(3);
          tree.addChild(6);
          const result = solution.isMinHeap(tree);
          assert.isFalse(result);
        });
      });
    });
  });
});



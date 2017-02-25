'use strict';

var insertAfterNth = require('./insertAfterNth.js'),
    assert = require ('chai').assert;

describe('linkedLists',function() { 

  describe('normal', function() {

    describe('insertAfterNth', function () {

      var node0, node1, node2, node3, node4;
      beforeEach(function(){
        node4 = {
          value: 4,
          next: null
        };
        node3 = {
          value: 3,
          next: node4
        };
        node1 = {
          value: 1,
          next: node3
        };
        node0 = {
          value: 0,
          next: node1
        };
      });

      it('should contain the new element at the (n+1)th location', function () {
        insertAfterNth(node0, 1, 2)
        var currentNode = node0.next.next;
        assert.equal(currentNode.value, 2);
      });

      it('should have the correct number of elements after insertion', function () {
        insertAfterNth(node0, 1, 2);
        insertAfterNth(node0, 4, 5);
        var nodeCount = 0;
        var node = node0;
        while(node) {
          nodeCount++;
          node = node.next;
        }
        assert.equal(nodeCount, 6);
      });

    });
  });
});
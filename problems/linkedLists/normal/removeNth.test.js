'use strict';

var removeNth = require('./removeNth.js'),
    assert = require ('chai').assert;

describe('linkedLists',function() { 

  describe('normal', function() {

    describe('removeNth', function () {

      var node0, node1, node2, node3, node4;
      var linkedList;
      beforeEach(function(){
        node4 = {
          value: 4,
          next: null
        };
        node3 = {
          value: 3,
          next: node4
        };
        node2 = {
          value: 2,
          next: node3
        };
        node1 = {
          value: 1,
          next: node2
        };
        node0 = {
          value: 0,
          next: node1
        };
        linkedList = {
          head: node0,
          tail: node4
        }
      });

      it('it should not contain the nth element', function () {
        removeNth(linkedList, 2)
        var node = linkedList.head;
        while (node) {
          assert.notEqual(node, node2);
          node = node.next;
        }
      });

      it('it should have the correct number of elements after removal', function () {
        removeNth(linkedList, 1);
        removeNth(linkedList, 1);
        var nodeCount = 0;
        var node = linkedList.head;
        while (node) {
          nodeCount++;
          node = node.next;
        }
        assert.equal(nodeCount, 3);
      });

    });
  });
});
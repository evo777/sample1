'use strict';

var sortedListMerge = require('./sortedListMerge.js'),
    assert = require ('chai').assert;

describe('linkedLists',function() { 

  describe('normal', function() {

    describe('sortedListMerge', function () {

      var node0, node1, node2, node3, node4, node5;
      beforeEach(function(){
        node5 = {
          value: 5,
          next: null
        };
        node4 = {
          value: 4,
          next: node5
        };
        node3 = {
          value: 3,
          next: null
        };
        node2 = {
          value: 2,
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

      it('it should sort a linked list', function () {
        var newHead = sortedListMerge(node0, node2);
        assert.equal(newHead, node0);
        assert.equal(node0.next, node1);
        assert.equal(node1.next, node2);
        assert.equal(node2.next, node3);
        assert.equal(node3.next, node4);
        assert.equal(node4.next, node5);
        assert.equal(node5.next, null);
      });

    });
  });
});
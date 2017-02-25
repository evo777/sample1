'use strict';

var PriorityQueue = require('./priorityQueue.js');
var assert = require('chai').assert;

describe('queues', function(){
  describe('normal', function(){
    describe('priorityQueue', function (){

      it('should behave like a regular queue when all the priorities are the same', function(){
        var myQ = new PriorityQueue();

        for(var i = 0; i < 10; i++){
          myQ.enqueue(i, 0);
        }

        assert.equal(myQ.size() , 10, 'Queue Size after enqueue');

        for(i = 0; i < 10; i++){
          assert.equal(myQ.dequeue(i, 0), i, 'Wrong value dequeued');
        }

        assert.equal(myQ.size(), 0, 'Queue Size after dequeue');
      });

      it('should dequeue higher priority values first', function(){
        var myQ = new PriorityQueue();
        var valuePriority = [];

        for(var i = 0; i < 100; i++){
          valuePriority[i] = Math.floor(Math.random() * 10);
          myQ.enqueue(i, valuePriority[i]);
        }

        assert.equal(myQ.size(), 100, 'Queue Size after enqueue');

        var lastPriority = -Infinity;
        for(i = 0; i < 100; i++){
          var value = myQ.dequeue();
          assert.isAtMost(lastPriority, valuePriority[value], 'Wrong priority');
          lastPriority = valuePriority[value];
        }

        assert.equal(myQ.size(), 0, 'Queue Size after dequeue');
      });

    });
  });
});

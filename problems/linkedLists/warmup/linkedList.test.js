'use strict';

var LinkedList = require('./linkedList.js');
var assert = require('chai').assert;

describe('LinkedLists', function() {
  describe('Warmup', function() {
    describe('LinkedList', function () {
      it('should add items to head and tail', function() {
        var myList = new LinkedList();
  
        assert.equal(myList.head, null, 'Empty initial list');
        myList.addToTail('is how ');
        myList.addToTail('we do it');
        assert.equal(myList.tail.value, 'we do it', 'Tail insertion not working');
        assert.equal(myList.head.value, 'is how ', 'Tail insertion not working');
        myList.addToHead('This ');
        assert.equal(myList.head.value, 'This ', 'Head insertion not working');
        assert.equal(myList.tail.value, 'we do it', 'Tail insertion not working');
  
        var montellJordan = 'This is how we do it';
        var output = '';

        for(var i = myList.head; i; i = i.next){
          output += i.value;
        }
        assert.equal(output, montellJordan, 'Head and Tail insertion methods not working');
      });
  
      it('should insert items after the passed in node', function() {
        var myList = new LinkedList();
        var fourthNode;
        for (var i = 0; i < 10; i++) {
          myList.addToTail(i);
          if (i === 3) {
            fourthNode = myList.tail;
          }
        }
        for (var i = 0; i < 10; i++) {
          myList.addToTail(i);
        }
        myList.insertAfter(fourthNode, 3.14159);
        assert.isTrue(myList.contains(3.14159));
        var soln = [0,1,2,3,3.14159,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9];
        var current = myList.head;
        for (var i = 0; i < soln.length; i++) {
          assert.equal(current.value, soln[i], 'Should only insert once');
          current = current.next;
        }
      });

      it ('should return an array of the node values starting from the head', function() {
        var myList = new LinkedList();
        var numbers = [0,1,2,3];
        for(var i = 0; i < numbers.length; i++){
          myList.addToTail(numbers[i]);
        }
        assert.deepEqual( myList.getValues(), numbers);
      });

      it ('should be able to reverse itself in place iteratively', function() {
        var myList = new LinkedList();
        var numbers = [0,1,2,3]
        for(var i = 0; i < numbers.length; i++){
          myList.addToTail(numbers[i]);
        }
        myList.iterativeReverse();
        assert.deepEqual(myList.getValues(), numbers.reverse());
      });

      it ('should be able to reverse itself in place recursively', function() {
        var myList = new LinkedList();
        var numbers = [0,1,2,3]
        for(var i = 0; i < numbers.length; i++){
          myList.addToTail(numbers[i]);
        }
        myList.recursiveReverse();
        assert.deepEqual(myList.getValues(), numbers.reverse());
      });
    });
  });
});
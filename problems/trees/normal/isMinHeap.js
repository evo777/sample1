'use strict';
const Tree = require('../warmup/basic_tree.js');
/*
A heap is a special kind of tree in which a parent node is ordered
only in respect to its immediate children.
The only order guaranteed is between a node and its parent.
There are two kinds of heaps: min heap or max heap.
A min heap is a binary tree in which each node is less than its immediate children.
A max heap is a binary tree in which each node is greater than its immediate children.
Each node can only have at most two children and there is only ever one possible place 
to insert a node in a heap, from left to right. 
A heap can be represented by an array of values : [4,6,10,9,18,20,11,12]
This heap really looks like this: 
           4
        6    10
      9  18  20  11
     12

Some tips if given an array that represents a heap:
parentIndex = Math.floor( (index - 1) / 2 )
childrenIndices = [index * 2 + 1, index * 2 + 2]
*/


/*
Given a tree as input, determine if it is a minHeap.
create a new tree with newTree = Tree.Tree(1) to test function.
Tree has value prop and children prop with methods addChild and contains
Assume that each value of tree is a number.
*/

const isMinHeap = function(tree) {

};

/*
extra credit: construct a min heap given an array of values 
input: [4,1,10,5,18,7,9,10]
result: [1,4,7,5,18,10,9,10]
did not write test for this one!
check out previous toy problem for this one. Probably useful to know!
*/
const MinHeap = function(array) {

};

module.exports = {
  Tree: Tree,
  isMinHeap: isMinHeap
}; 

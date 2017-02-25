'use strict';

const solution = require('./traverse_tree.js'),
      assert = require('chai').assert;

 describe('trees', function() {
	describe('warmup', function() {
		describe('traversing trees', function (){

			describe('flattenTreeBreadthFirst', function() {
				it('should flatten breadth-first', function() {
			    const tree = new solution.Tree('root');
			    tree.addChild('a');
			    tree.addChild('b');
			    tree.children[0].addChild('p');
			    tree.children[0].addChild('q');
			    tree.children[0].children[0].addChild('foo');
			    tree.children[1].addChild('x');
			    tree.children[1].addChild('y');
			    const result = solution.flattenTreeBreadthFirst(tree);
			    const expected = ['root', 'a', 'b', 'p', 'q', 'x', 'y', 'foo'];
			    assert.deepEqual(expected, result);
				});
			});

			describe('flattenTreeDepthFirst', function() {
				it('should flatten depth-first', function() {
			    const tree = new solution.Tree('root');
			    tree.addChild('a');
			    tree.addChild('b');
			    tree.children[0].addChild('p');
			    tree.children[0].addChild('q');
			    tree.children[0].children[0].addChild('foo');
			    tree.children[1].addChild('x');
			    tree.children[1].addChild('y');
			    const result = solution.flattenTreeDepthFirst(tree);
			    const expected = ['root', 'a', 'p', 'foo', 'q', 'b', 'x', 'y'];
			    assert.deepEqual(expected, result);
				});
			});

		});
	});
});

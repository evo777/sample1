'use strict';
/**
 * Manifest specifying test file order.
 */

[
  './javascript/warmup/math.test.js',
  './javascript/warmup/es6.tests.js',
  './javascript/warmup/strings.test.js',
  './javascript/warmup/objects.test.js',
  './javascript/warmup/arrays.test.js',
  './javascript/warmup/truthy_falsy.test.js',
  './javascript/warmup/hoisting.test.js',
  './javascript/warmup/closures.test.js',
  './javascript/warmup/regex.test.js',
  './javascript/normal/scope.test.js',
  './javascript/normal/async.test.js',
  './javascript/normal/hoisting2.test.js',

  './strings/warmup/unique_characters.test.js',
  './strings/warmup/string_permutation.test.js',
  './strings/warmup/string_compression.test.js',
  './strings/normal/longest_palindrome.test.js',
  './strings/normal/palindrome_permutation.test.js',

  './arrays/warmup/flatten.test.js',
  './arrays/warmup/every.test.js',
  './arrays/warmup/reverse_array_in_place.test.js',
  './arrays/warmup/reverse_stringify_array.test.js',
  './arrays/warmup/some.test.js',
  './arrays/normal/spiral_print.test.js',
  './arrays/normal/remove_duplicates.test.js',
  './arrays/normal/rotate_matrix.test.js',
  './arrays/normal/rotate_matrix_in_place.test.js',

  './math/warmup/parse.test.js',
  './math/normal/isPrimeNumber.test.js',

  './linkedLists/warmup/linkedList.test.js',
  './linkedLists/normal/removeNth.test.js',
  './linkedLists/normal/cycle.test.js',
  './linkedLists/normal/sortedListMerge.test.js',

  './math/normal/recursiveMultiply.test.js',
  './math/normal/max_product.test.js',

  './math/warmup/bitwise_operators.js',

  './trees/warmup/basic_tree.test.js',
  './trees/warmup/traverse_tree.test.js',
  './trees/normal/pathSum_basic.test.js',
  './trees/normal/isMinHeap.test.js',

  './stacks/warmup/stack.test.js',
  './stacks/normal/minStack.test.js',

  './queues/warmup/queue.test.js',
  './queues/normal/priorityQueue.test.js',
  
  './graphs/warmup/basic_graph.test.js',

  './sortAndSearch/warmup/search.test.js',
  './sortAndSearch/warmup/sort.test.js',

].forEach(function(test) {
	require(test);
});

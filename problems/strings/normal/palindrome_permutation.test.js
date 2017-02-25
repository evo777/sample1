'use strict';

var solution = require('./palindrome_permutation.js'),
    assert = require ('chai').assert;

describe('strings', function() {
  describe('normal', function() {
  	describe('palindromePermutation', function (){

  	  it('should identify strings that are permutations of a palindrome', function () {
  	    assert.equal(solution.palindromePermutation("redrummurder"), true);
  	  });

  	  it('should not identify string that are not permutations of a palindrome', function (){
  	    assert.equal(solution.palindromePermutation('rawr'), false);
  	  });

  	});
  });
});

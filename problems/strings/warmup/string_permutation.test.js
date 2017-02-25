'use strict';

const solution = require('./string_permutation.js'),
    assert = require ('chai').assert;

describe('strings', function() {
  describe('warmup', function() {
  	describe('stringPermutation', function (){

  	  it('should identify two strings that are permutations of each other', function () {
  	    assert.equal(solution.stringPermutation('derp', 'repd'), true);
  	  });

  	  it('should not identify two strings that are not permutations of each other', function (){
  	    assert.equal(solution.stringPermutation('rawr', 'rawl'), false);
  	  });

  	});
  });
});

'use strict';

const solution = require('./unique_characters.js'),
      assert = require ('chai').assert;

describe('strings', function() {
  describe('warmup', function() {
  	describe('allUniqueCharacters', function (){

  	  it('detects all unique characters', function () {
  	    assert.equal(solution.allUniqueCharacters('should'), true);
  	  });

  	  it('detects no unique characters', function () {
  	    assert.equal(solution.allUniqueCharacters('characters'), false);
  	  });
  	});
  });
});

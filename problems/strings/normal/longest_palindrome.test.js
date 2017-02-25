'use strict';

const solution = require('./longest_palindrome.js'),
    assert = require ('chai').assert;

describe('strings', function() {
  describe('normal', function() {
  	describe('longestPalindrome', function (){

  	  it('finds the longest palindrome', function () {
  	    assert.equal(solution.longestPalindrome('lol stackcats'), 'stackcats');
  	  });

    });
	});
});

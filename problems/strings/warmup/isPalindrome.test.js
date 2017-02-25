'use strict';

const solution = require('./isPalindrome.js'),
    assert = require ('chai').assert;

describe('strings', function() {
  describe('normal', function() {
    describe('isPalindrome', function (){

      it('should determine if the string is a palindrome or not', function () {
        assert.equal(solution.longestPalindrome('stackcats'), true);
      });

      it('should determine if the string is a palindrome or not', function () {
        assert.equal(solution.longestPalindrome('trolololol'), false);
      });

    });
  });
});

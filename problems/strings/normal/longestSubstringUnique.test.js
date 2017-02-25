'use strict';

const solution = require('./longestSubstringUnique.js');
const assert = require ('chai').assert;

const you = it;

describe('strings', function() {
  describe('normal', function() {
    describe('longestSubstringUnique', function (){

      you('find the longest substring that contains only 2 unique characters', function () {
        assert.equal(solution.longestSubstringUnique('abcbbbbcccbdddadacb'), 'bcbbbbcccb');
      });

    });
  });
});

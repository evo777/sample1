// Regexp.exec
// Regexp.test
// String.match
// String.replace
// String.search
// String.split
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// http://goo.gl/itRa9t

'use strict';

const _ = require('underscore');
const assert = require ('chai').assert;

const you = it;
const REPLACE_ME = null;

describe('Javascript', function () {

  describe('warmup', function () {

    describe('String.match', function () {
      var myString = 'Helloo World! The quick brown fox jumped over the lazy dog';
      
      you('predict the result from matching on a specific string', function () {
        assert.isTrue(EXPECTED === myString.match(/Wo/).index);
      });
      
      you('predict the result from matching on an asterisk', function () {
        var expected = myString.match(/e.*j/g);
        assert.deepEqual(EXPECTED, expected);
      });

      you('predict the result from matching without asterisk', function () {
        var expected = myString.match(/e.j/);
        assert.isTrue(EXPECTED === expected);
      });

      you('predict the result from matching with repeater', function () {
        var expected = myString.match(/o+/g);
        assert.deepEqual(EXPECTED, expected);
      });
    });
    
  });
  
});
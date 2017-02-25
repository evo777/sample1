'use strict';

const _ = require('underscore');
const assert = require ('chai').assert;

const you = it;
const REPLACE_ME = null;

describe('JavaScript', function (){

  describe('warmup', function (){

    describe('String.slice', function() {
      you('predict what slicing (0,2) will do', function () {
        assert.isTrue(REPLACE_ME === 'abcde'.slice(0, 2));
      });

      you('predict what slicing (1) will do', function () {
        assert.isTrue(REPLACE_ME === 'abcde'.slice(1));
      });

      you('predict what slicing (-1) will do', function () {
        assert.isTrue(REPLACE_ME === 'abcde'.slice(-1));
      });

      you('predict what slicing (-5) will do', function () {
        assert.isTrue(REPLACE_ME === 'abcde'.slice(-5));
      });
    });

    describe('String.split', function() {
      you('predict what splitting on nothing will produce', function() {
        const expected = 'abcdefg'.split();
        assert.isTrue(_.isEqual(REPLACE_ME, expected));
      });

      you('predict what splitting on vowels will produce', function() {
        const expected = 'abcdefg'.split(/[aeiou]/);
        assert.isTrue(_.isEqual(REPLACE_ME, expected));
      });
    });

    describe('String.lastIndexOf', function() {
      you('predict the return value of a match', function() {
        const expected = 'abcabcabc'.lastIndexOf('cab');
        assert.isTrue(REPLACE_ME === expected);
      });
    });

    describe('String.charAt', function(){
      you('predict what character at index (2) will produce', function () {
        assert.isTrue(REPLACE_ME === 'abcdefg'.charAt(2));
      });

      you('predict what character at index (999) will produce', function () {
        assert.isTrue(REPLACE_ME === 'abcdefg'.charAt(999));
      });
    });

  });

});

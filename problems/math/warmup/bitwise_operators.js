'use strict';

const _ = require('underscore');
const assert = require ('chai').assert;

const you = it;
const REPLACE_ME = null;

describe('math', function (){

  describe('warmup', function (){

    describe('Bitwise shift', function() {
      you('predict what left shifting the number 12 will return.', function () {
        assert.isTrue(_.isEqual(REPLACE_ME, (12 << 1)));
      });

      you('predict sign-propagating right shifting -12 will return.', function () {
        assert.isTrue(_.isEqual(REPLACE_ME, (-12 >> 1)));
      });

      you('predict if zero-fill right shifting -12 is OVER 9000!.', function () {
        assert.isTrue(_.isEqual(REPLACE_ME, ((-12 >>> 1) > 9000)));
      });
    });

    describe('Bitwise AND', function() {
      you('predict the result of ANDing 1000 with 1011', function() {
         assert.isTrue(_.isEqual(parseInt('FILL_ME_IN', 2), parseInt('1000', 2) & parseInt('1011', 2)));
      });
    });

    describe('Bitwise OR', function() {
      you('predict the result of ORing 1000 with 1011', function() {
        assert.isTrue(_.isEqual(parseInt('FILL_ME_IN', 2), parseInt('1000', 2) | parseInt('1011', 2)));
      });
    });

    describe('Bitwise XOR', function() {
      you('predict the result of XORing 1000 with 1011', function() {
        assert.isTrue(_.isEqual(parseInt('FILL_ME_IN', 2), parseInt('1000', 2) ^ parseInt('1011', 2)));
      });
    });

    describe('Bitwise NOT', function() {
      you('predict the result of NOTing 12', function() {
        assert.isTrue(_.isEqual(FILL_ME_IN, ~12));
      });
    });

  });
});

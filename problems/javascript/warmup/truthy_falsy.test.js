'use strict';

const _ = require('underscore');
const assert = require ('chai').assert;

const you = it;
const REPLACE_ME = null;

describe('JavaScript', function (){

  describe('warmup', function (){

    describe('Truthy/Falsy', function() {
      you('predict what !![] will return', function () {
        assert.isTrue(REPLACE_ME === !![]);
      });

      you('predict what !!{} will return', function () {
        assert.isTrue(REPLACE_ME === !!{});
      });

      you('predict what !!1 will return', function () {
        assert.isTrue(REPLACE_ME === !!1);
      });

      you('predict what !!0 will return', function () {
        assert.isTrue(REPLACE_ME === !!0);
      });

      you('predict what !!(function() {}) will return', function () {
        var x = function() {};
        assert.isTrue(REPLACE_ME === !!x);
      });

      you('predict what !!{ a: 1 } will return', function () {
        var x = { a: 1 };
        assert.isTrue(REPLACE_ME === !!x);
      });

      you('predict what !![1, 2, 3] will return', function () {
        assert.isTrue(REPLACE_ME === !![1, 2, 3]);
      });

      you('predict what !!NaN will return', function () {
        assert.isTrue(REPLACE_ME === !!NaN);
      });

      you('predict what !!null will return', function () {
        assert.isTrue(REPLACE_ME === !!null);
      });

      you('predict what !!undefined will return', function () {
        assert.isTrue(REPLACE_ME === !!undefined);
      });

      you('predict what !!\'abc\' will return', function () {
        assert.isTrue(REPLACE_ME === !!'abc');
      });

      you('predict what !!\'\' will return', function () {
        assert.isTrue(REPLACE_ME === !!'');
      });

      you('predict what !!\'0\' will return', function () {
        assert.isTrue(REPLACE_ME === !!'0');
      });

      you('predict what !!\'false\' will return', function () {
        assert.isTrue(REPLACE_ME === !!'false');
      });

    });

  });

});

'use strict';

const _ = require('underscore');
const assert = require ('chai').assert;

const you = it;
const REPLACE_ME = null;

describe('JavaScript', function (){

  describe('warmup', function (){

    describe('Array.concat', function() {
      you('predict what concatenating ["A", "B", "C"] with [1, 2, 3] will return', function () {
        assert.isTrue(_.isEqual(REPLACE_ME, ["A", "B", "C"].concat([1, 2, 3])));
      });

      you('predict what concatenating [1, 2, 3] with ["A", "B", "C"] will return', function () {
        assert.isTrue(_.isEqual(REPLACE_ME, [1, 2, 3].concat(["A", "B", "C"])));
      });
    });

    describe('Array.join', function() {
      you('predict the resulting array from joining ["A", "B", "C"] with no argument', function() {
         assert.isTrue(_.isEqual(REPLACE_ME, ["A", "B", "C"].join()));
      });
    });

    describe('Array.push', function() {
      you('predict the return value of pushing "D" to ["A", "B", "C"]', function() {
        assert.isTrue(REPLACE_ME === ["A", "B", "C"].push("D"));
      });
    });

    describe('Array.pop', function() {
      you('predict the return value of ["A", "B", "C"].pop()', function() {
        assert.isTrue(REPLACE_ME === ["A", "B", "C"].pop());
      });
    });

    describe('Array.shift', function() {
      you('predict the return value of ["A", "B", "C"].shift()', function() {
        assert.isTrue(REPLACE_ME === ["A", "B", "C"].shift());
      });
    });

    describe('Array.unshift', function() {
      you('predict the return value of ["A", "B", "C"].unshift("X")', function() {
        assert.isTrue(REPLACE_ME === ["A", "B", "C"].unshift("X"));
      });
    });

    describe('Array.slice', function() {
      you('predict the resulting array when slicing ["one","two", "three", "four"] at 0,2', function() {
        const expected = ["one","two", "three", "four"].slice(0,2);
        assert.isTrue(_.isEqual(REPLACE_ME, expected));
      });

      you('predict the resulting array when slicing ["one","two", "three", "four"] at 0', function() {
        const expected = ["one","two", "three", "four"].slice(0);
        assert.isTrue(_.isEqual(REPLACE_ME, expected));
      });

      you('predict the resulting array when slicing ["one","two", "three", "four"] at -2', function() {
        const expected = ["one","two", "three", "four"].slice(-2);
        assert.isTrue(_.isEqual(REPLACE_ME, expected));
      });
    });

    describe('Array.splice', function() {
      you('predict the resulting array of ["one","two", "three", "four"].splice(1, 2, 3, 4)', function() {
        const expected = ["one","two", "three", "four"].splice(1, 2, 3, 4);
        assert.isTrue(_.isEqual(REPLACE_ME, expected));
      });
    });

    describe('Array.reverse', function() {
      you('predict the resulting array when invoking reverse on ["one","two", "three", "four"]', function() {
        const expected = ["one","two", "three", "four"].reverse();
        assert.isTrue(_.isEqual(REPLACE_ME, expected));
      });
    });

    describe('Array.sort', function() {
      you('predict the resulting array from sorting ["BAT", "CAT", "ARTICHOKE"]', function() {
        const expected = ["BAT", "CAT", "ARTICHOKE"].sort();
        assert.isTrue(_.isEqual(REPLACE_ME, expected));
      });

      you('predict the resulting array from sorting [1, 9, 3, 100, 800, 20]', function() {
        const expected = [1, 9, 3, 100, 800, 20].sort();
        assert.isTrue(_.isEqual(REPLACE_ME, expected));
      });
    });

    describe('Array.indexOf', function() {
      you('predict the return value of ["A", "B", "X", "Z"].indexOf("X")', function() {
        assert.isTrue(REPLACE_ME === ["A", "B", "X", "Z"].indexOf("X"));
      });

      you('predict the return value of ["A", "B", "X", "Z"].indexOf("Y")', function() {
        assert.isTrue(REPLACE_ME === ["A", "B", "X", "Z"].indexOf("Y"));
      });
    });

    describe('Array.map', function() {
      you('predict the resulting array when performing [1, 4, 9].map(function(n) { return n * 3; })', function() {
        const expected = [1, 4, 9].map(function(n) { return n * 3; });
        assert.isTrue(_.isEqual(REPLACE_ME, expected));
      });
    });

    describe('Array.filter', function() {
      you('predict the resulting array from [1, 40, 900, 60, 300].filter(function(n) { return n < 300; })', function() {
        const expected = [1, 40, 900, 60, 300].filter(function(n) { return n < 300; });
        assert.isTrue(_.isEqual(REPLACE_ME, expected));
      });
    });

    describe('Array.reject', function() {
      you('predict the resulting array from _.reject([1, 40, 900, 60, 300], function(n) { return n < 300; })', function() {
        const expected = _.reject([1, 40, 900, 60, 300], function(n) { return n < 300; });
        assert.isTrue(_.isEqual(REPLACE_ME, expected));
      });
    });

    describe('Array.every', function() {
      you('predict the return value of [10, 9, 8, 7].every(function(n) { return n < 15; })', function() {
        const expected = [10, 9, 8, 7].every(function(n) { return n < 15; });
        assert.isTrue(REPLACE_ME === expected);
      });

      you('predict the return value of [10, 9, 8, 7].every(function(n) { return n < 8; })', function() {
        const expected = [10, 9, 8, 7].every(function(n) { return n < 8; });
        assert.isTrue(REPLACE_ME === expected);
      });
    });

    describe('Array.some', function() {
      you('predict the return value of [400, 243, 86, 138, 302].some(function(n) { return n < 100; })', function() {
        const expected = [400, 243, 86, 138, 302].some(function(n) { return n < 100; });
        assert.isTrue(REPLACE_ME === expected);
      });

      you('predict the return value of [400, 243, 86, 138, 302].some(function(n) { return n < 80; })', function() {
        const expected = [400, 243, 86, 138, 302].some(function(n) { return n < 80; });
        assert.isTrue(REPLACE_ME === expected);
      });
    });

    describe('Array.reduce', function() {
      you('predict the return value of [950, 120, 602, 10, 40].reduce(function(a, b) { return a - b; })', function() {
        const expected = [950, 120, 602, 10, 40].reduce(function(a, b) { return a - b; });
        assert.isTrue(REPLACE_ME === expected);
      });
    });

    describe('Array.reduceRight', function() {
      you('predict the return value of [950, 120, 602, 10, 40].reduceRight(function(a, b) { return a - b; })', function() {
        const expected = [950, 120, 602, 10, 40].reduceRight(function(a, b) { return a - b; });
        assert.isTrue(REPLACE_ME === expected);
      });
    });

  });

});

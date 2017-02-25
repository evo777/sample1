/**
 * Using your knowledge of the Math object, fill in the following tests.
 */

 'use strict';
const assert = require ('chai').assert;

const you = it;
const REPLACE_ME = null;

describe('JavaScript', function (){

  describe('Warmup', function (){

    describe('Math.max', function() {
      you('predict the result calling Math.max(10, 20)', function () {
        assert.isTrue(REPLACE_ME === Math.max(10, 20));
      });

      you('predict the result calling Math.max(-10, -20)', function () {
        assert.isTrue(REPLACE_ME === Math.max(-10, -20));
      });

      you('predict the result calling Math.max(20, -5, 10, 7)', function () {
        assert.isTrue(REPLACE_ME === Math.max(20, -5, 10, 7));
      });

      you('predict the result calling Math.max(10, null)', function () {
        assert.isTrue(REPLACE_ME === Math.max(10, null));
      });
    });

    describe('Math.min', function() {
      you('predict the result calling Math.min(10, 20)', function () {
        assert.isTrue(REPLACE_ME === Math.min(10, 20));
      });

      you('predict the result calling Math.min(10, null)', function () {
        assert.isTrue(REPLACE_ME === Math.min(10, null));
      });
    });

    describe('Math.pow', function() {
      you('predict the result calling Math.pow(1, 2)', function () {
        assert.isTrue(REPLACE_ME === Math.pow(1, 2));
      });

      you('predict the result calling Math.pow(7, 2)', function () {
        assert.isTrue(REPLACE_ME === Math.pow(7, 2));
      });
    });

    describe('Math.log', function() {
      you('predict the result calling Math.log(1)', function () {
        assert.isTrue(REPLACE_ME === Math.log(1));
      });

      you('predict the result calling Math.log(8)', function () {
        // Pay attention to the comparison here...
        assert.isTrue(REPLACE_ME > Math.log(8));
      });
    });

    // For more information on E: https://en.wikipedia.org/wiki/E_(mathematical_constant)
    describe('Math.exp', function() {
      you('predict the result calling Math.exp(3)', function () {
        assert.isTrue(REPLACE_ME > Math.exp(3));
      });
    });

    describe('Math.E', function() {
      you('predict the value of Math.E', function () {
        // Pay attention to the comparison here...
        assert.isTrue(REPLACE_ME > Math.E);
      });
    });

    describe('Math.round', function() {
      you('predict the result calling Math.round(2.4)', function () {
        assert.isTrue(REPLACE_ME === Math.round(2.4));
      });

      you('predict the result calling Math.round(13.5)', function () {
        assert.isTrue(REPLACE_ME === Math.round(13.5));
      });
    });

    describe('Math.floor', function() {
      you('predict the result calling Math.floor(3.4)', function () {
        assert.isTrue(REPLACE_ME === Math.floor(3.4));
      });

      you('predict the result calling Math.floor(13.95)', function () {
        assert.isTrue(REPLACE_ME === Math.floor(13.95));
      });
    });

    describe('Math.ceil', function() {
      you('predict the result calling Math.ceil(4.95)', function () {
        assert.isTrue(REPLACE_ME === Math.ceil(4.95));
      });

      you('predict the result calling Math.ceil(1.004)', function () {
        assert.isTrue(REPLACE_ME === Math.ceil(1.004));
      });
    });

    describe('Math.random', function() {
      you('predict the approximate result calling Math.random()', function () {
        assert.isTrue(REPLACE_ME > Math.random());
      });
    });

    describe('Math.sqrt', function() {
      you('predict the result calling Math.sqrt(9)', function () {
        assert.isTrue(REPLACE_ME === Math.sqrt(9));
      });

      you('predict the result calling Math.sqrt(16)', function () {
        assert.isTrue(REPLACE_ME === Math.sqrt(16));
      });
    });

  });

});

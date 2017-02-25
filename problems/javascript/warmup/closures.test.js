'use strict';

const _ = require('underscore');
const assert = require ('chai').assert;

const you = it;
const REPLACE_ME = null;

describe('JavaScript', function (){

  describe('warmup', function (){

    describe('Basic closures', function() {
      you('predict what function foo invoked twice will return', function () {
        var foo = function() {
          var a = 5;
          return function bar() {
            return a + 10;
          };
        };
        assert.isTrue(_.isEqual(REPLACE_ME, foo()()));
      });

    });

  });

});

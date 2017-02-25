'use strict';

const _ = require('underscore');
const assert = require ('chai').assert;

const you = it;
const REPLACE_ME = null;

describe('JavaScript', function (){

  describe('normal', function (){

    describe('function hoisting with expressions and declarations', function() {
      
      you('predict what the type of a function is above the function expression', function () {
        var bar = typeof foo;
        var foo = function(a) {
          return a;
        }
        assert.isTrue(REPLACE_ME === bar);
      });

      you('predict what result of a function will be when invoked above a function declaration', function () {
        var result = bar(10);
        function bar(a) {
          return a;
        }
        assert.isTrue(REPLACE_ME === result);
      });
      
    });
  });

});

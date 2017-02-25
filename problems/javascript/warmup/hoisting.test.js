'use strict';

const _ = require('underscore');
const assert = require ('chai').assert;

const you = it;
const REPLACE_ME = null;

describe('JavaScript', function (){

  describe('warmup', function (){

    describe('Variable hoisting', function() {
      you('can assign variables before declaring them', function () {
        a = 10;
        var a;
        assert.isTrue(_.isEqual(REPLACE_ME, a));
      });


      you('predict what function foo will return', function () {
        var a = 10;
        var foo = function() {
          if (!a) {
            var a = 'I am one with the force';
          }
          return a;
        };
        assert.isTrue(_.isEqual(REPLACE_ME, foo()));
      });

    });

    describe('Function hoisting', function() {
      you('predict what function bar will return', function () {
        function bar() {
          return 'This';
        }

        assert.isTrue(_.isEqual(REPLACE_ME, bar()));
        
        function bar() {
          return 'That';
        }
      });

    });

  });

});

'use strict';

const _ = require('underscore');
const assert = require ('chai').assert;

const you = it;
const REPLACE_ME = null;

describe('JavaScript', function (){

  describe('normal', function (){

    describe('scoping', function() {
      you('predict what endingValue will be', function () {
        var initialValue = 0;
        var endingValue = 0;

        for(var i = 0; i < 1; i++) {
          let value = initialValue + 1;
        }

        if(1 == 1) {
          var value = value || -1;
          value++;
        }

        (function changeValue() {
          if(1 == 1) {
            var value = 2;
          }
          value = 3;
        })()

        endingValue = value;

        assert.isTrue(endingValue === REPLACE_ME);

      });

    });
  });

});

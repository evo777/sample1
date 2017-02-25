'use strict';
const _ = require('underscore');
const assert = require ('chai').assert;

const you = it;
const REPLACE_ME = null;

describe('JavaScript', function (){

  describe('warmup. Parsing practice', function (){

    describe('intValue.toString(radix).', function() {
      you('predict what (15).toString(2) will produce', function () {
        assert.isTrue(REPLACE_ME === (15).toString(2));
      });

      you('predict what (15).toString(16) will produce', function () {
        assert.isTrue(REPLACE_ME === (15).toString(16));
      });
    });

    describe('parseInt(string, radix)', function() {
      you('predict what parseInt("11", 2) will produce', function() {
        assert.isTrue(REPLACE_ME === parseInt("11", 2));
      });

      you('predict what parseInt("0000ff", 16) will produce', function() {
        assert.isTrue(REPLACE_ME === parseInt('0000ff', 16));
      });

    });
  });

});

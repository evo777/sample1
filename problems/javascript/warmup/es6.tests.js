'use strict';

const _ = require('underscore');
const assert = require ('chai').assert;

const you = it;
const REPLACE_ME = null;

describe('ECMA2015', function () {
  describe('warmup', function () {
    describe('Destructuring', function () {

      you('Predict what b is equivalent to', function () {
        const numbers = [1,2,3,4,5];
        const [a,b] = numbers;

        assert.isTrue(REPLACE_ME === b)
      })

      you('Predict what b is equivalent to.', function () {
        const letters = ['a', 'b', 'c', 'd', 'e'];
        const [d,a,b,e,c] = letters;

        assert.isTrue(REPLACE_ME === b)
      })

      you('Predict what Steve is equivalent to.', function () {
        const numbers = [1, 2, 3, 4, 5];
        const [a, b, ...Steve] = numbers;

        assert.isTrue(_.isEqual(REPLACE_ME, Steve));
      })
    })
  })
})

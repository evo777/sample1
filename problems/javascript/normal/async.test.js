'use strict';

const _ = require('underscore');
const assert = require ('chai').assert;

const you = it;
const REPLACE_ME = null;

describe('JavaScript', function (){

  describe('normal', function (){

    describe('async', function() {
      you('predict what endingValue will be with var', function (done) {
        var endingValue = 0;
        for (var i = 10; i < 13; i++) {
          setTimeout(() => { endingValue += i; }, i);
        }
        setTimeout(()=> {
          assert.isTrue(endingValue === REPLACE_ME);
          done();
        }, 200);
      });

      you('predict what endingValue will be with let', function (done) {
        let endingValue = 0;
        for (let i = 10; i < 13; i++) {
          setTimeout(() => { endingValue += i; }, i);
        }
        setTimeout(()=> {
          assert.isTrue(endingValue === REPLACE_ME);
          done();
        }, 200);
      });
    });
  });

});

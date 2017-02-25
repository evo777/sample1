'use strict'

const assert = require ('chai').assert;

const REPLACE_ME = null;

describe('JavaScript', function (){

  describe('normal', function (){

    describe('Promises', function() {
      
      it('Predict the value of a and b with then before catch', function (done) {
        let a;
        let b;
        var p = new Promise((resolve, reject) => {
          reject();
        })
        .then(() => {
          a = 'a';
        })
        .catch(() => {
          b = 'b';
        });

        setTimeout(() => {
          assert.equal(a, REPLACE_ME);
          assert.equal(b, REPLACE_ME);
          done();
        }, 100);
      });

      it('Predict the value of a and b with catch before then', function (done) {
        let a;
        let b;
        var p = new Promise((resolve, reject) => {
          reject();
        })
        .catch(() => {
          b = 'b';
        })
        .then(() => {
          a = 'a';
        });

        setTimeout(() => {
          assert.equal(a, REPLACE_ME);
          assert.equal(b, REPLACE_ME);
          done();
        }, 100);
      });
      
    });
  });

});
'use strict';

var isSquare = require('./problem05.js'),
    assert = require ('chai').assert;

describe('problem set 001',function(){
  describe('problem 5', function(){
    describe('is square', function (){

      it('rejects negative numbers', function(){
        assert.isFalse(isSquare(-1), 'Negative numbers cannot be square numbers');
      });

      it('accepts 4', function() {
        assert.isTrue(isSquare(4));
      });

      it('accepts 25', function() {
        assert.isTrue( isSquare(25));
      });

      it('rejects 3', function() {
        assert.isFalse(isSquare(3));
      });

      it('rejects 26', function() {
        assert.isFalse(isSquare(26));
      });

      it('should work for random square numbers', function(){
        var r, i;
        for(i = 0; i < 100; ++i){
          r = (Math.random() * 0xfff0) | 0;
          assert.isTrue(isSquare(r*r), (r * r) + ' is a square number');
        }
      });

    });
  });
});

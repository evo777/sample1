'use strict';

var getMiddle = require('./problem03.js'),
    assert = require ('chai').assert;

describe('problem set 001',function(){
  describe('problem 3', function(){
    describe('get middle', function (){

      it('gets 1 middle char in an odd-length string', function() {
        assert.equal(getMiddle('testing'),'t');
      });

      it('gets two middle chars in an even-length string', function() {
        assert.equal(getMiddle('test'),'es');
      });

      it('gets 1 char in a 1-char string', function() {
        assert.equal(getMiddle('A'),'A');
      });

      it('gets 2 chars in a 2-char string', function() {
        assert.equal(getMiddle('middle'),'dd');
      });
    });
  });
});

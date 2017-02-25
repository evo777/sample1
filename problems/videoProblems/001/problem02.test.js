'use strict';

var stringy = require('./problem02.js'),
    assert = require ('chai').assert;

describe('problem set 001',function(){
  describe('problem 2', function(){
    describe('the stringy function reimplemented', function (){

      it('Should return a string', function() {
        assert.equal(typeof stringy(3), 'string',
        'Make sure it\'s a string not a number (the function is called stringy after all!)');
      });

      it('Should start with a 1', function() {
        assert.equal(stringy(3)[0], '1',
        'Whoops your string doesnt start with a 1?');
      });

      it('Should have the correct length', function() {  
        for(let i = 0; i < 10; ++i){
          let parameter = (Math.random() * 50 + 1) | 0;
          assert.equal(stringy(parameter).length, parameter, 'Wrong length on ' + parameter);
        }
      });

      it('Should return 101010 for size 6', function() {
        assert.equal(stringy(6), '101010');
      });

      it('Should return 10101 for size 5', function() {
        assert.equal(stringy(5), '10101');
      });

    });
  });
});

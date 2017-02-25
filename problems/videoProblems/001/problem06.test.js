'use strict';

var expand = require('./problem06.js'),
    assert = require ('chai').assert;

describe('problem set 001',function(){
  describe('problem 6', function(){
    describe('expand', function (){

      it('correctly expands various strings', function(){
        let expected = 'Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu';
        assert.equal(expand('ZpglnRxqenU'), expected);

        expected = 'N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb';
        assert.equal(expand('NyffsGeyylB'), expected);

        expected = 'M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu';
        assert.equal(expand('MjtkuBovqrU'), expected);
      });

    });
  });
});

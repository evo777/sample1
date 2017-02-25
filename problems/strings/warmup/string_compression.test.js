'use strict';

const solution = require('./string_compression.js'),
    assert = require ('chai').assert;

describe('strings', function() {
  describe('warmup', function() {
    describe('stringCompression', function (){

      it('should replace repeated characters with letter counts', function () {
        assert.equal(solution.stringCompression('aabcccccaaa'), 'a2b1c5a3');
      });

      it('should not have the compression exceed the length of the original string', function (){
        assert.equal(solution.stringCompression('aaa'), 'a3');
        assert.equal(solution.stringCompression('aa'), 'a2');
        assert.equal(solution.stringCompression('a'), 'a');
      });

    });
  });
});

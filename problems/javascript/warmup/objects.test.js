// Object.create
// write a function to get all methods on an object

'use strict';
const _ = require('underscore');
const assert = require ('chai').assert;

const you = it;
const REPLACE_ME = null;


describe('Javascript', function (){

    describe('warmup', function (){
      describe('Object.keys', function (){
        const obj = {
          fizz: "buzz",
          foo: "bar",
          baz: false,
        };

        you('predict the return value of Object.keys(obj)', function () {
          assert.isTrue(_.isEqual(REPLACE_ME, Object.keys(obj)));
        });



        you('predict the return value of Object.keys(obj) after assigning keys with non-string values', function () {
          obj[{thing: 1}] = "thing1";
          obj[{thing: 2}] = "thing2";
          obj[['thing', 'three']] = "thing3";
          obj[['thing', 'four']] = "thing3";
          obj[4] = "thing4";
          obj["five"] = "thing5";

          assert.isTrue(_.isEqual(_.difference([REPLACE_ME], Object.keys(obj)),[]));
        });

      });

    });

});


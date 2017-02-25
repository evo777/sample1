'use strict';

var assert = require('chai').assert;
var instantiation = require('./instantiationSolutions');

describe('The PSEUDOCLASSICAL account maker prototype', function() {
  describe('when instantiated', function() {
    it ('should have a name property', function() {
      assert.deepEqual(instantiation.psFred.name, 'Fred')  
    })
  })

  describe('should reference the method currently connected to the prototype', function() {
    it ('before the change (full SSN)', function() {
      assert.deepEqual(instantiation.psFredBeforeExpected, '111335555') 
      assert.deepEqual(instantiation.psFredBeforeMethodChange, '111335555')  
    })
    it ('and after the change (partial SSN) - for both Fred and Allan', function() {
      assert.deepEqual(instantiation.psFredAfterMethodChange, '5555')
      assert.deepEqual(instantiation.psFredAfterExpected, '5555') 
      assert.deepEqual(instantiation.psAllenAfterMethodChange, '6666')
      assert.deepEqual(instantiation.psAllenAfterMethodChange, '6666')  
    })
  })
})

describe('The FUNCTIONAL SHARED account maker prototype', function() {
  describe('when instantiated', function() {
    it ('should have a name property', function() {
      assert.deepEqual(instantiation.fsFred.name, 'Fred') 
    })
  })

  describe('should reference the method connected to the prototype WHEN instantiation occurred', function() {
    it ('before the change (full SSN)', function() {
      assert.deepEqual(instantiation.fsFredBeforeExpected, '111335555') 
      assert.deepEqual(instantiation.fsFredBeforeMethodChange, '111335555')  
    })
    it ('and after the change (partial SSN) - but only for Allen', function() {
      assert.deepEqual(instantiation.fsAllenAfterMethodChange, '6666')
      assert.deepEqual(instantiation.fsAllenAfterMethodChange, '6666')  
    })
    it ('because the method for Fred is still the method attached from when instantiation occurred (full SSN)', function() {
      assert.deepEqual(instantiation.fsFredAfterMethodChange, '111335555')
      assert.deepEqual(instantiation.fsFredAfterExpected, '111335555') 
    })
  })
})
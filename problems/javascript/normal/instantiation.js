///////////////////////////////////
// PSEUDCOLASSICAL INSTANTIATION //
///////////////////////////////////

// Create a prototype using a pseudoclassical instantiation pattern that takes in two variables.
// These variables are name and social security number. They should be assigned as properties on that object.
// Assume that social security number is being entered as a string rather than an integer.

var psAccountMaker = function(name, SSN) {
  // Add properties here
};

psAccountMaker.prototype.showSSN = function() {
  return this.ssn;
  // Create a method called "showSSN" - this should return the social security number of the person's account.
};


var psFred = new psAccountMaker("Fred", "111335555");
var psFredBeforeMethodChange = psFred.showSSN();
var psFredBeforeExpected = ''; // Type what you expect the psFredBeforeMethodChange to equal


psAccountMaker.prototype.showSSN = function() {
  // Now, only return the LAST FOUR numbers of the person's social security number
  // Notice this method is named the same as the previous method
};


var psAllen = new psAccountMaker("Allen", "2224466666");
var psAllenAfterMethodChange = psAllen.showSSN();
var psAllenAfterExpected = ''; // Type expected result for the newly instantiated object here.

var psFredAfterMethodChange = psFred.showSSN();
var psFredAfterExpected = ''; // Type what you expect the psFredBeforeMethodChange to equal now that the method has changed.



/////////////////////////////////////
// FUNCTIONAL SHARED INSTANTIATION //
/////////////////////////////////////

// Now, create the prototype using a functional shared instantiation pattern.
var fsAccountMaker = function(name, SSN) {
  // Add properties here
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

fsAccountMaker.accountMethods = {};

fsAccountMaker.accountMethods.showSSN = function() {
  // Create a method that returns the full SSN
};


fsFred = fsAccountMaker("Fred","111335555");
var fsFredBeforeMethodChange = fsFred.showSSN();
var fsFredBeforeExpected = ''; // Type what you expect the fsFredBeforeMethodChange to equal

fsAccountMaker.accountMethods.showSSN = function() {
  // Now, only return the LAST FOUR numbers of the person's social security number
  // Notice this method is named the same as the previous method
};


fsAllen = fsAccountMaker("Allen","222446666");
var fsAllenAfterMethodChange = fsAllen.showSSN();
var fsAllenAfterExpected = ''; // Type expected result for the newly instantiated object here.

var fsFredAfterMethodChange = fsFred.showSSN();
var fsFredAfterExpected = ''; // Type what you expect the psFredBeforeMethodChange to equal now that the method has changed.



module.exports = {
  psAccountMaker: psAccountMaker,
  psFredBeforeMethodChange: psFredBeforeMethodChange,
  psFredBeforeExpected: psFredBeforeExpected,
  psFredAfterMethodChange: psFredAfterMethodChange,
  psFredAfterExpected: psFredAfterExpected,
  psAllenAfterMethodChange: psAllenAfterMethodChange,
  psAllenAfterExpected: psFredBeforeExpected,
  psFred: psFred,
  psAllen: psAllen,
  fsAccountMaker: fsAccountMaker,
  fsFredBeforeMethodChange: fsFredBeforeMethodChange,
  fsFredBeforeExpected: fsFredBeforeExpected,
  fsFredAfterExpected: fsFredAfterExpected,
  fsFredAfterMethodChange: fsFredAfterMethodChange,
  fsAllenAfterMethodChange: fsAllenAfterMethodChange,
  fsAllenAfterExpected: fsAllenAfterExpected,
  fsFred: fsFred,
  fsAllen: fsAllen,
}


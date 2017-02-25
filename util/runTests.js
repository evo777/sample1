'use strict';
/**
 * Test runner utility for Preparator.
 * 
 * Programmatically runs tests (rather than via mocha's CLI).
 * This allows us to hook into Mocha framework events.
 *
 * This script is launched via the `test` property in NPM config,
 * thus preserving the customary `npm test` invocation style.
 * See {@link https://docs.npmjs.com/misc/scripts}.
 *
 * Supported invocation patterns:
 * - All tests: `npm test`
 * - Single test directory: `npm test test/001_strings`
 * - Single test file: `npm test test/001_strings/001_strings_warmup.js`
 *
 */

const Mocha = require('mocha');
const fs = require('fs');
const glob = require('glob');
const path = require('path');
const request = require('request');

const REPORTING_SERVER_URL = 'http://preparator3000.herokuapp.com/progress';
const MANIFEST_FILE_PATH = './problems/manifest.js';
const GITHUB_HANDLE = process.env.GITHUB_HANDLE;
const RUN_MODE = process.env.RUN_MODE;
const STUDENT_NAME = process.env.HR_NAME;
const STUDENT_EMAIL = process.env.HR_EMAIL;
const STUDENT_COHORT = process.env.HR_COHORT;

const runner = new Mocha({
  ui: 'bdd',
  reporter: 'spec',
  bail: true,
  timeout: 10000,
  slow: 3000
});

function getLocationArg() {
  return process.argv[2];
}

function isDirectory(filePath) {
  return fs.lstatSync(filePath).isDirectory();
}

function toFullPath(rootDir, pathPart) {
  return path.join(process.cwd(), rootDir, pathPart);
}

function addTestFilesFromRootDirectory(rootDir) {
  const files = glob.sync('**/*.test.js', { cwd: rootDir });
  files.forEach(function(file){
    runner.addFile(toFullPath(rootDir, file));
  });
}

function addTestFiles(locationArg) {
  let fileOrDirPath;

  if (locationArg) {
    fileOrDirPath = locationArg;
    if (isDirectory(fileOrDirPath)) {
      // Target directory was specified on command line.
      addTestFilesFromRootDirectory(fileOrDirPath);
    } else {
      // Target file was specified on command line.
      runner.addFile(fileOrDirPath);
    }
  } else {
    // Default to loading from manifest.
    runner.addFile(MANIFEST_FILE_PATH);
  }

}

function isDevMode() {
  return RUN_MODE && RUN_MODE === 'dev';
}

function sendStats(testRunner, currentPrompt) {
  request.post(REPORTING_SERVER_URL)
  .json({
    progress: {
      category: currentPrompt.category,
      difficulty: currentPrompt.difficulty,
      title: currentPrompt.title,
      passCount: testRunner.stats.passes,
    },
    student:{
      githubHandle: GITHUB_HANDLE, // the github handle that HR has on record
      name: STUDENT_NAME,
      email: STUDENT_EMAIL,
      cohort: STUDENT_COHORT,
    }
  });
}

function checkVariables(){
  if(!isDevMode() &&
    (!GITHUB_HANDLE || !STUDENT_NAME || !STUDENT_EMAIL || !parseInt(STUDENT_COHORT))){
    console.log('\nSet environment variables called: \n\n' +
      'GITHUB_HANDLE to your github handle, \n'+
      'HR_NAME to your name, \n'+
      'HR_EMAIL to your email, and \n' +
      'HR_COHORT to your cohort (just the number)\n');
    return false;
  }
  return true;
}

function runTests() {
  let currentPrompt = {};
  runner.run()
    .on('fail', function(test, err) {
      currentPrompt.category = test.parent.parent.parent.title;
      currentPrompt.difficulty = test.parent.parent.title;
      currentPrompt.title = test.parent.title;
    })
    .on('pending', function() {
      console.log('skipped test?');
    })
    .on('end', function() {
      if (!isDevMode()) {
        sendStats(this, currentPrompt);
      }
    });
}

function run() {
  if(checkVariables()){
    addTestFiles(getLocationArg());
    runTests();
  }
}

run();

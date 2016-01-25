/**
 * @file Lib renderers tests
 * @author StefanoMagrassi <stefano.magrassi@gmail.com>
 */

var test   = require('tape');
var logger = require('../lib/logger');

// logger(type = log, message)
test('Logs message in console and returns the message', function(t) {
  var message = 'test';
  var actual  = logger('log', message);
  var expect  = message;

  t.equal(actual, expect, 'should return the message');
  t.end();
});

// logger(type = error, message)
test('Logs error message in console and returns the message', function(t) {
  var message = 'error';
  var actual = logger('error', message);
  var expect = message;

  t.equal(actual, expect, 'should return the message');
  t.end();
});

// logger(type = mytype, message)
test('Logs message in console with "non-console" type and returns the message', function(t) {
  var message = 'error';
  var actual = logger('mytype', message);
  var expect = message;

  t.equal(actual, expect, 'should return the message');
  t.end();
});

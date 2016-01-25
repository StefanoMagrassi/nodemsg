/**
 * @file Lib styles tests
 * @author StefanoMagrassi <stefano.magrassi@gmail.com>
 */

var test   = require('tape');
var chalk  = require('chalk');
var styles = require('../lib/styles.js');

test('Renders with specified supported type', function(t) {
  var message = 'test';
  var actual  = styles.render('info', message);
  var expect  = chalk.cyan(message);

  t.equal(actual, expect, 'should output string with coloured ANSI');
  t.end();
});

test('Renders with specified unsupported type', function(t) {
  var message = 'test';
  var actual  = styles.render('mytype', message);
  var expect  = message;

  t.equal(actual, expect, 'should output string');
  t.end();
});

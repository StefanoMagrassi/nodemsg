/**
 * @file Lib renderers tests
 * @author StefanoMagrassi <stefano.magrassi@gmail.com>
 */

var test   = require('tape');
var config = require('../lib/config');
var extend = require('util')._extend;

// config()
test('Get default config', function(t) {
  var actual = config.factory();
  var expect = config.DEFAULT;

  t.deepEqual(actual, expect, 'should return the default configuration');
  t.end();
});

// config(opt)
test('Get default config merged with passed object', function(t) {
  var opt    = { silent: true, test: 'test' };
  var actual = config.factory(opt);
  var expect = extend(config.DEFAULT, opt);

  t.deepEqual(actual, expect, 'should return the default configuration merged with passed object');
  t.end();
});

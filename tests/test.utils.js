/**
 * @file Lib utils tests
 * @author StefanoMagrassi <stefano.magrassi@gmail.com>
 */

var test  = require('tape'),
    utils = require('../lib/utils.js');

// utils.argsToArray
// ---
test('convert function "arguments" into array', function(t) {
  var f = function() {
    return utils.argsToArray(arguments);
  };
  
  t.comment('simple flat arguments');
  t.deepEqual(f('a', 'b', 0), ['a', 'b', 0]);
  t.comment('complex multi-level arguments');
  t.deepEqual(f('a', 0, {b: 'beta'}), ['a', 0, {b: 'beta'}]);
  t.end();
});

// utils.longestKey
// ---
test('get the longest key in object', function(t) {
  var shortKey = 'foo',
      longKey  = 'very_very_long',
      o        = {};
  
  o[shortKey] = shortKey;
  o[longKey]  = longKey;
  
  t.comment('short key');
  t.notEqual(utils.longestKey(o), shortKey.length);
  t.comment('long key');
  t.equal(utils.longestKey(o), longKey.length);
  t.end();
});

// utils.filler
// ---
test('add trailing pad to string until it reaches maximum length', function(t) {
  var shortKey = 'foo',
      longKey  = 'very_very_long',
      maximum  = longKey.length;
  
  t.comment('short key must be long as long key');
  t.equal(utils.filler(shortKey, maximum).length, longKey.length);
  t.end();
});

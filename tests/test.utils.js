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

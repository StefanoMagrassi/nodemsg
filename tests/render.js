/**
 * @file Lib renderers tests
 * @author StefanoMagrassi <stefano.magrassi@gmail.com>
 */

var test   = require('tape');
var styles = require('../lib/styles');
var render = require('../lib/render');
var config = require('../lib/config').factory();

test('Renders message with specified type transformation', function(t) {
  var type    = 'info';
  var message = 'test';
  var actual  = render(type, [message]);
  var expect  = styleHelper(type, message, config);

  t.deepEqual(actual, expect, 'should return message as array with specified style');
  t.end();
});

test('Renders message without style transformation', function(t) {
  var type    = 'mytype';
  var message = 'test';
  var actual  = render(type, [message]);
  var expect  = styleHelper(type, message, config);

  t.deepEqual(actual, expect, 'should return message as array without style');
  t.end();
});

// Test helpers
// ------------
/**
 * Applies style to message.
 * @param  {string} type
 * @param  {strign} message
 * @return {array}
 */
function styleHelper(type, message, config) {
  var result = [styles.render(type, message)];

  if (config && config.before) {
    result.unshift(styles.render(type, config.before));
  }

  if (config && config.after) {
    result.push(styles.render(type, config.after));
  }

  return result;
}

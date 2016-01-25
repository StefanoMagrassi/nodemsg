/**
 * @file Lib renderers tests
 * @author StefanoMagrassi <stefano.magrassi@gmail.com>
 */

var test   = require('tape');
var styles = require('../lib/styles.js');
var render = require('../lib/render.js');

test('Renders message with specified type transformation', function(t) {
  var type    = 'info';
  var message = 'test';
  var styled  = styles.render(type, message);
  var actual  = render(type, [message]);
  var expect  = [styled];

  expect.unshift(styles.render('line', '---\n>'));
  expect.push('\n');

  t.deepEqual(actual, expect, 'should return message as array with specified style');
  t.end();
});

test('Renders message without style transformation', function(t) {
  var type    = 'mytype';
  var message = 'test';
  var styled  = styles.render(type, message);
  var actual  = render(type, [message]);
  var expect  = [styled];

  expect.unshift(styles.render('line', '---\n>'));
  expect.push('\n');

  t.deepEqual(actual, expect, 'should return message as array without style');
  t.end();
});

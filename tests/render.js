/**
 * @file Lib renderers tests
 * @author StefanoMagrassi <stefano.magrassi@gmail.com>
 */

var test   = require('tape');
var styles = require('../lib/styles.js');
var render = require('../lib/render.js');

test('outputs string with ANSI', function(t) {
  var rendered = render('info', ['test']);
  var styled   = styles.render('info', 'test');
  
  // Mock
  var mock     = [styled];
  mock.unshift(styles.render('line', '---\n>'));
  mock.push('\n');
  
  t.deepEqual(rendered, mock);
  t.end();
});

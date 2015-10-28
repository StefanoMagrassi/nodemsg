/**
 * @file Lib renderers tests
 * @author StefanoMagrassi <stefano.magrassi@gmail.com>
 */

var test     = require('tape'),
    chalk    = require('chalk'),
    renderer = require('../lib/renderer.js');

test('outputs string with ANSI', function(t) {
  var rendered  = renderer('info', ['test']),
      chalkInfo = chalk.cyan('[INFO]   '),
      chalkTest = chalk.cyan('test');
  
  t.deepEqual(rendered, [chalkInfo, chalkTest]);
  t.end();
});

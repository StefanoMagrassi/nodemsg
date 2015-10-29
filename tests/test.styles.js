/**
 * @file Lib styles tests
 * @author StefanoMagrassi <stefano.magrassi@gmail.com>
 */

var test   = require('tape');
var chalk  = require('chalk');
var styles = require('../lib/styles.js');

test('render with specified type', function(t) {
  var mock = chalk.cyan;
  
  t.equal(styles.render('info', 'test'), mock('test'));
  t.end();
});

/**
 * @file Nodemsg tests
 * @author StefanoMagrassi <stefano.magrassi@gmail.com>
 */

var test   = require('tape');
var logger = require('../index.js');

test('logging messages', function(t) {
  logger.log('Simple', 'log', 'message')
        .info('Info', 'message')
        .success('Urrah!', 'What', 'a', 'success')
        .warn('Achtung!', 'It\'s', 'a', 'warning')
        .error('Oh,', 'no!', 'Error', 'error', 'error');
        
  t.end();
});

/**
 * @file Nodemsg tests
 * @author StefanoMagrassi <stefano.magrassi@gmail.com>
 */

var test   = require('tape');
var logger = require('../index.js');

test('logging messages', function(t) {
  // Silenced logger: it should avoid false negative test failures
  logger.config({ silent: true });
  
  t.ok(logger.log('Simple', 'log', 'message'), 'log -> "Simple log message"');
  t.ok(logger.info('Info', 'message'), 'info -> "message"');
  t.ok(logger.success('Urrah!'), 'success -> "Urrah!"');
  t.ok(logger.warn('Achtung!'), 'warn -> "Achtung!"');
  t.ok(logger.error('Oh, no!'), 'error -> "Oh, no!"');
  t.ok(logger.log('This').info('is').success('chained'), 'error -> "This is chained"');
        
  t.end();
});

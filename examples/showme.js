/**
 * @file Show me how nodemsg works
 * @author StefanoMagrassi <stefano.magrassi@gmail.com>
 */

var logger = require('../index.js');

// Configuration
logger.config({
  silent: false,
  before: '>',
  after: ''
});

// Some space before the messages...
console.log('\n');

// Default use
console.log('Default use'); // Standard console - look at differences
console.log('---\n');
logger.log('Simple log message');
logger.info('Info message');
logger.success('Urrah!');
logger.warn('Achtung!');
logger.error('Oh, no!');
console.log('\n');

// Multiple parameters
console.log('Multiple parameters');
console.log('---\n');
logger.log('I', 'am', 'a', 'simple', 'logger');
console.log('\n');

// Chained
console.log('Chained');
console.log('---\n');
logger.log('Simple', 'log', 'message')
      .info('Info', 'message')
      .success('Urrah!')
      .warn('Achtung!')
      .error('Oh,', 'no!');
console.log('\n');

console.log(logger.log('test: logs message and returns nodemsg object'));

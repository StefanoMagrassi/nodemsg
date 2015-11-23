/**
 * @file Show me how nodemsg works
 * @author StefanoMagrassi <stefano.magrassi@gmail.com>
 */

var logger = require('../index.js');

// Configuration
logger.config({ silent: true });

// Some space before the messages...
console.log('\n\n');

// Default use
console.log('Default use'); // Standard console - look at differences
logger.log('Simple log message');
logger.info('Info message');
logger.success('Urrah!');
logger.warn('Achtung!');
logger.error('Oh, no!');
console.log('\n');

// Multiple parameters
console.log('Multiple parameters');
logger.log('I', 'am', 'a', 'simple', 'logger');
console.log('\n');

// Chained
console.log('Chained');
logger.log('Simple', 'log', 'message')
      .info('Info', 'message')
      .success('Urrah!')
      .warn('Achtung!')
      .error('Oh,', 'no!');
console.log('\n');

console.log(logger.log('test'));

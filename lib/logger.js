/**
 * @file Nodemsg - config
 * @author StefanoMagrassi <stefano.magrassi@gmail.com>
 */

// Imports
// -------
var render = require('./render');
var config = require('./config').factory;

// Public methods
// --------------
/**
 * Calls console.log method in order to log the rendered messages.
 * @public
 * @param  {string}         type
 * @param  {[object|array]} messages
 * @return {array}
 */
function logger(type, messages) {
  var rendered = render(type, messages);
  var log      = console.log;

  if (config().silent) {
    return messages;
  }

  if (typeof console[type] === 'function') {
    log = console[type];
  }

  log.apply(null, rendered);

  return messages;
}

// Exports
// -------
module.exports = logger;

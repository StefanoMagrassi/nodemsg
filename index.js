/**
 * @file Nodemsg - super simple message logger
 * @author StefanoMagrassi <stefano.magrassi@gmail.com>
 * @copyright MIT
 */

// Modules
// -------
var config = require('./lib/config').factory;
var logger = require('./lib/logger');

// Public methods
// --------------
/**
* Logs info message.
* @public
* @chainable
* @return {object}
*/
function info() {
  logger('info', arguments);

  return this;
}

/**
* Logs success message.
* @public
* @chainable
* @return {object}
*/
function success() {
  logger('success', arguments);

  return this;
}

/**
 * Logs warn message.
 * @public
 * @chainable
 * @return {object}
 */
function warn() {
  logger('warn', arguments);

  return this;
}


/**
* Logs error message.
* @public
* @chainable
* @return {object}
*/
function error() {
  logger('error', arguments);

  return this;
}

/**
* Logs simple message.
* @public
* @chainable
* @return {object}
*/
function log() {
  logger('log', arguments);

  return this;
}

// Exports
// -------
module.exports = {
  config : config,
  info   : info,
  success: success,
  warn   : warn,
  error  : error,
  log    : log
};

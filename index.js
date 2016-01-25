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
 * Collects the methods exported.
 * @namespace {object} nodemsg
 * @alias nodemsg
 */
var nodemsg = {

  /**
   * Alias to access to private method.
   * @public
   * @param  {object} opt
   * @return {object}
   */
  config: config,

  /**
   * Logs info message.
   * @memberof nodemsg
   * @public
   * @chainable
   * @return {object}
   */
  info: function() {
    logger('info', arguments);

    return this;
  },

  /**
   * Logs success message.
   * @memberof nodemsg
   * @public
   * @chainable
   * @return {object}
   */
  success: function() {
    logger('success', arguments);

    return this;
  },

  /**
   * Logs warn message.
   * @memberof nodemsg
   * @public
   * @chainable
   * @return {object}
   */
  warn: function() {
    logger('warn', arguments);

    return this;
  },

  /**
   * Logs error message.
   * @memberof nodemsg
   * @public
   * @chainable
   * @return {object}
   */
  error: function() {
    logger('error', arguments);

    return this;
  },

  /**
   * Logs simple message.
   * @memberof nodemsg
   * @public
   * @chainable
   * @return {object}
   */
  log: function() {
    logger('log', arguments);

    return this;
  }
};

// Exports
module.exports = nodemsg;

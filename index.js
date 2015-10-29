/**
 * @file Nodemsg - super simple message logger
 * @author StefanoMagrassi <stefano.magrassi@gmail.com>
 * @copyright MIT
 */

// Modules
var render = require('./lib/render.js');

/**
 * Calls console.log method in order to log the rendered messages.
 * @private
 * @param  {string}         type
 * @param  {[object|array]} messages
 * @return {array}
 */
function logger(type, messages) {
  var rendered = render(type, messages);
  var log      = console.log;
  
  if (typeof console[type] === 'function') {
    log = console[type];
  }
  
  log.apply(null, rendered);
  
  return messages;
}

/**
 * Collects the methods exported.
 * @namespace {object} nodemsg
 * @alias nodemsg
 */
var nodemsg = {
  
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
    // Simple log
    logger('log', arguments);
    
    return this;
  }
};

// Exports
module.exports = nodemsg;

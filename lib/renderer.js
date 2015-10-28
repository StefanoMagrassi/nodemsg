/**
 * @file Nodemsg - renderer
 * @author StefanoMagrassi <stefano.magrassi@gmail.com>
 */

// Modules
var chalk = require('chalk'),
    utils = require('./utils.js');

// Constants
var CONSTS = {
  LOG    : 'log',
  INFO   : 'info',
  SUCCESS: 'success',
  WARN   : 'warn',
  ERROR  : 'error'
};

/**
 * @property {object} stylesCache - module cache.
 */
var stylesCache = null;

/**
 * Gets the chalk styles from cache, creating cache object if it doesn't exist.
 * @return {object}
 */
var getStylesMap = function() {
  if (stylesCache !== null) {
    return stylesCache;
  }
  
  stylesCache = {};
  stylesCache[CONSTS.LOG]     = chalk.white;
  stylesCache[CONSTS.INFO]    = chalk.cyan;
  stylesCache[CONSTS.SUCCESS] = chalk.bold.green;
  stylesCache[CONSTS.WARN]    = chalk.yellow;
  stylesCache[CONSTS.ERROR]   = chalk.bold.red;
  
  return stylesCache;
};
    
/**
 * Gets a chalk style from cache by type.
 * @param  {string} type
 * @return {function}
 */
var getStyle = function(type) {
  return getStylesMap()[type];
};

/**
 * Set styles to string based on type from map.
 * @param  {string} type
 * @param  {string} str 
 * @return {string}
 */
var styles = function(type, str) {
  return getStyle(type)(str);
};

/**
 * Renders type tag column.
 * @param  {string} type
 * @return {string}
 */
var tag = function(type) {
  var t = '[' + type.toUpperCase() + ']';
  
  return utils.filler(t, utils.longestKey(CONSTS, 2));
};

/**
 * Remaps messages applying styles.
 * @param  {string} type
 * @param  {array} messages
 * @return {array}
 */
var map = function(type, messages) {
  if (type !== CONSTS.LOG) {
    messages.unshift(tag(type));
  }
  
  return messages.map(styles.bind(null, type));
};

// Exports
/**
 * Renders messages with specified type.
 * @param  {string} type
 * @param  {[object|array]} messages
 * @return {array}
 */
module.exports = function(type, messages) {
  if (!Array.isArray(messages)) {
    messages = utils.argsToArray(messages);
  }
  
  return map(type, messages);
};

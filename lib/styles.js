/**
 * @file Nodemsg - styles
 * @author StefanoMagrassi <stefano.magrassi@gmail.com>
 */

// Modules
// -------
var chalk = require('chalk');

// Constants
// ---------
/**
 * @constant {object} STYLES - Styles for different types
 * @private
 */
var STYLES = {
  LOG    : {
    name : 'log',
    style: chalk.white
  },
  INFO   : {
    name : 'info',
    style: chalk.cyan
  },
  SUCCESS: {
    name : 'success',
    style: chalk.bold.green
  },
  WARN   : {
    name : 'warn',
    style: chalk.yellow
  },
  ERROR  : {
    name : 'error',
    style: chalk.bold.red
  },
  LINE   : {
    name : 'line',
    style: chalk.bold.magenta
  }
};

// Public methods
// --------------
/**
 * Gets a chalk style from cache by type.
 * @public
 * @param  {string} type
 * @return {Function}
 */
function style(type) {
  return STYLES[type.toUpperCase()].style;
}

/**
 * Set styles to string based on type from map.
 * @public
 * @param  {string} type
 * @param  {string} str
 * @return {string}
 */
function render(type, str) {
  if (!hasStyle(type)) {
    return str;
  }

  return style(type)(str);
}

// Private methods
// ---------------
/**
 * Gets specified type style data from styles list.
 * @param  {string} type
 * @return {[object|undefined]}
 */
function getStyle(type) {
  return STYLES[type.toUpperCase()];
}

/**
 * Checks if specified type is in styles list.
 * @param  {string}  type
 * @return {boolean}
 */
function hasStyle(type) {
  return (typeof getStyle(type) !== 'undefined');
}

// Exports
// -------
module.exports = {
  style : style,
  render: render
};

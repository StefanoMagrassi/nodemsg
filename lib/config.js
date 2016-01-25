/**
 * @file Nodemsg - config
 * @author StefanoMagrassi <stefano.magrassi@gmail.com>
 */

// Imports
// -------
var extend = require('util')._extend;

// Public properties
// -----------------
/**
 * @property {object} DEFAULT - Default configuration.
 */
var DEFAULT = {
  silent: false, // Silences the logger
  before: '>',   // String before logged message
  after : ''     // String after logged message
};

// Public methods
// --------------
/**
 * Gets default configuration merged with passed config (if specified).
 * @param  {object} [config]
 * @return {object}
 */
function factory(config) {
  if (typeof config === 'undefined') {
    return DEFAULT;
  }

  return extend(DEFAULT, config);
}

// Exports
// -------
module.exports = {
  DEFAULT: DEFAULT,
  factory: factory
};

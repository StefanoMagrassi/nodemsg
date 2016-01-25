/**
 * @file Nodemsg - render
 * @author StefanoMagrassi <stefano.magrassi@gmail.com>
 */

// Modules
// -------
var atoa   = require('nexxa-atoa');
var styles = require('./styles');
var config = require('./config').factory();

// Private methods
// ---------------
/**
 * Apply colors and styles to messages, based on type.
 * @private
 * @param  {string} type
 * @param  {array}  messages
 * @return {array}
 */
function colorize(type, messages) {
  var renderType = styles.render.bind(styles, type);

  return messages.map(renderType);
}

/**
 * Creates output to send to console.
 * @private
 * @param  {string} type
 * @param  {array}  messages
 * @return {array}
 */
function output(type, messages) {
  // Prepend "before" string
  if (config.before) {
    messages.unshift(config.before);
  }

  // Appeng "after" string
  if (config.after) {
    messages.push(config.after);
  }

  // Apply styles
  return colorize(type, messages);
}

// Public methods
// --------------
/**
 * Renders messages with specified type.
 * @public
 * @param  {string}         type
 * @param  {[object|array]} messages
 * @return {array}
 */
function render(type, messages) {
  if (!Array.isArray(messages)) {
    messages = atoa(messages);
  }

  return output(type, messages);
}

// Exports
// -------
module.exports = render;

/**
 * @file Nodemsg - render
 * @author StefanoMagrassi <stefano.magrassi@gmail.com>
 */

// Modules
// -------
var styles = require('./styles.js');
var atoa   = require('nexxa-atoa');

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
  // Apply styles
  var op = colorize(type, messages);

  // Add leading indent
  op.unshift(styles.render('line', '---\n>'));

  // Add trailing new line
  op.push('\n');

  return op;
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

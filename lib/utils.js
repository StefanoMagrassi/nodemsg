/**
 * @file Nodemsg - utilities
 * @author StefanoMagrassi <stefano.magrassi@gmail.com>
 * @copyright MIT
 */

/**
 * Copy item from source array to destination array at the specified index.
 * @private
 * @param  {array}  source
 * @param  {array}  dest
 * @param  {*}      item
 * @param  {number} index
 * @return {array}
 */
function copyItem(source, dest, item, index) {
  dest[index] = source[index];
    
  return dest;
}

/**
 * @namespace Collects utilities.
 * @public
 * @alias utils
 * @type {object}
 */
var utils = {
  
  /**
   * Coverts "arguments" object in array.
   * @memberof utils
   * @public
   * @param  {object} args
   * @return {array}
   */
  argsToArray: function(args) {
    // Creates new empty array with length property set to "arguments" length.
    // With this technic you can use Array loop methods on it.
    //
    // @see http://stackoverflow.com/questions/3746725/create-a-javascript-array-containing-1-n/20066663#20066663
    var a = Array.apply(null, Array(args.length));
    
    // Partial application with Function.prototype.bind method
    var copyArgsItem = copyItem.bind(null, args);
    
    return a.reduce(copyArgsItem, []);
  }
};

module.exports = utils;

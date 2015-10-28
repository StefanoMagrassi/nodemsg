/**
 * @file Nodemsg - utilities
 * @author StefanoMagrassi <stefano.magrassi@gmail.com>
 * @copyright MIT
 */

// Privates methods
/**
 * Copy item from source array to destination array at the specified index.
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
 * Calculates string pad.
 * @param  {number} offset
 * @param  {string} item
 * @return {number}
 */
function pad(offset, item) {
  return item.length + offset;
}

/**
 * Gets the max between two numbers.
 * @param  {number} first
 * @param  {number} second
 * @return {number}
 */
function max(first, second) {
  return (first > second) ? first : second;
}

// Exposed methods
/**
 * @namespace Collects utilities.
 * @alias utils
 * @type {object}
 */
var utils = {
  
  /**
   * Coverts "arguments" object in array.
   * @memberof utils
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
  },

  /**
   * Gets the max length of the keys of an object.
   * @memberof utils
   * @param  {object} obj
   * @param  {number} offset
   * @return {number}
   */
  longestKey: function(obj, offset) {
    if (typeof offset === 'undefined') {
      offset = 0;
    }
    
    return Object
            .keys(obj)
            .map(pad.bind(null, offset))
            .reduce(max);
  },
  
  /**
   * Fills a string with empty spaces until max.
   * @memberof utils
   * @param  {string} str
   * @param  {number} maximum
   * @param  {string} fillWith
   * @return {string}
   */
  filler: function(str, maximum, fillWith) {
    if (typeof fillWith === 'undefined') {
      fillWith = ' ';
    }
    
    var l = str.length,
        toFill,
        spaces,
        i;
    
    if (l >= maximum) {
      return str;
    }
    
    toFill = maximum - l;
    spaces = [];
    
    for (i = 0; i < toFill; i++) {
      spaces.push(fillWith); 
    }
    
    return str + spaces.join('');
  }
};

module.exports = utils;

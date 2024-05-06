// ------ Values in JS ------

/** ------ NUMERIC VALUES -------
 * Two different types - Integers and Floating Point
 * 
 * Integers are whole numbers eg 100 with no decimal
 * 
 * Floating point numbers** with a number with a decimal point
 * - called floating because the decimal can float to anywhere it needs eg 10.5 or 1.05
 * Floating numbers can contain up 16 significant figures in total - before or after the decimal point
 */

var integer = 100;
var floating = 100.5;
// or
let letInteger = 100;
let letFloating = 33.33333;

/** ------ STRING VALUES -------- 
 * Strings are collections of characters in a particular order
 * 
 * Must start and end with either single or double quotes “ or ‘ - known as "delimiters"
 * 
 * What delimiter a string starts with it must end with:
 * must be the same eg “hello 12345” or ‘hello 12345’
 * 
 * Stick to a pattern - if you begin your code using single quotes stick to that. Don't mix and match
*/

// Examples:
// Correct - swapping use of delimiters:
let correctString = "She said, ‘Mustn’t there be a way?’ to no-one in particular.";
console.log(correctString);

// Incorrect String 
// let incorrectString = “She said, ‘Mustn’t there be a way?’ to no-one in particular.”

/**
 * This is not a valid string. The interpreter will get as far as “She said, “ as a string 
 * but then will get confused as it doesn’t know what you mean by M.
 * 
 * This will spit an error to your console such as:
 * SyntaxError: Unexpected identifier
 * 
 * This is because we have broken the rules of JavaScripts syntax
 * 
 * To fix our syntax error we must escape our quotes (delimiters) with a backslash:
 */

let correctedString = "She said, \“Mustn’t there be a way?\” to no-one in particular";

/** -------- EXERCISE TIME ----------
 * Write the following as valid strings in your browser console:
 * I’d think you wouldn’t do that.
 * ‘Bob’s requested, “Please don’t say goodbye”’, said Alice.
 * “I’ll take ⅓ of the prize pool”, he said proudly
 * 
 * Experiment with putting these strings inside an alert function
 */


// --------- BOOLEAN VALUES -------------
/**
 * true or false no inbetween
 * Represent an non-numerical logic state
 * Named after 19th-century mathematician George Boole (hence why Boolean is always capitalised)
 * Either true or false, not both or neither, and not somewhere between
 * Follow logical pattern of computers and binary
 * - true / false
 * - 1 and 0
 * - on and off
 * - black and white
 */

let trueExample = true;
let falseExample = false;
// These values are easliy tested again as conditonals
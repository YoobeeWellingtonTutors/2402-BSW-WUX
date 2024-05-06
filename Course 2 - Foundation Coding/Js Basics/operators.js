/** -------- OPERATORS ---------- 
 * We can create new values from old values. This is called operations.
 * 
 * We use operators to signify that we wish to perform these operations.
 * 
 * Operations that are performed on one, two or three other values are called operands.
*/

/** ---- Assignment Operator ----- 
 * = value assignment  means ‘is set to’
 * The assignment operator assigns a value to a variable.
*/

let myname;
myname = "Bob"; // username is assigned the value Bob

/** ---- Numbers & Arithmetic Operators -----
 * + addition
 * -subtraction
 * * multiplication
 * / division
 * % remainder
 */

let divison = 10 / 4;
console.log(divison);

let remainder = 14 % 4;
console.log(remainder); // logs out 2 ( 14 divide by 4 is 3 with 2 remainder )

/** ------ Logical Operators -------
 * Logical operators are used to determine the logic between variable or values.
 * 
 * && logical AND operator
 * || logical OR operator
 * ! logical NOT operator
 */

// Examples

var x = 6;
var y = 3;

// (x < 10 && y > 1) // logs out true a x is less than 10 AND y is greater than 1
// (x == 5 || y == 5) // is false as x is not 5 and/or y is not 5
// !(x ==y) // is true as x does not eqaul y

/** ------ Order of Operations ------ 
 * In programming, every operator takes a place in the language’s order of operations hierarchy
 * 
 * JavaScript follows PEDMAS for its arithmetic operations hierarchy. Get to know this well!
 * 
 * PEMDAS
 * Parentheses** 			( )
 * Exponents 			20²
 * Multiplication 		9 x 9
 * Division			10 / 2
 * Addition 			2 + 2
 * Subtraction 			4 - 2
 * Multiplication and division actually share the same level in the order, as do addition and subtraction. The left-most or the right-most operator will be evaluated first. This is called associativity. Arithmetic operators have left to right associativity.
*/

/** Parentheses - Being Explicit
 * Because the order of operations can be hard to memorise, be explicit with the operations you intend by using parentheses to group. 
 * 
 * For example:
 * 9 + 9 * 9 = 90 		- the order of operations will be applied (PEDMAS)
 * 9 + (9 * 9) = 90		- here the intent is explicitly stated. Parentheses come first.
 * (9 + 9) * 9 = 162		- parentheses are required to override default order
 * 
 * This will become extremely important when computing variables against other variables. For example:
 * var total = (burger * burgerQuantity) + (drinks * drinksQuantity);
 */

/** ------- Exercise Time ------- 
 * Create the following variables for a order of a new phone.
 * 
 * var phonePrice = 1399.99
 * var charger = 59.99
 * var phoneCase = 39.99
 * var extendedWarranty = (phonePrice * 0.1) // 10% of phone price
 * var insurance = 12.50 // per month
 * 
 * Log out the and calculate the total price for a phone with the following accessories:
 * 1 x charger,
 * 2 x cases,
 * An extended warranty
 * 12 months insurance
 * 
 * Hint - you need use toFixed to get the price to 2 decimal places
 * https://www.w3schools.com/jsref/jsref_tofixed.asp
*/


let phonePrice = 1399.99;
let charger = 59.99;
let phoneCase = 39.99;
let extendedWarranty = phonePrice * 0.1; // 10% of phone price
let insurance = 12.50;

// Quantity of accessories
let chargerQuantity = 1;
let phoneCaseQuantity = 2;

// Calculate total price
let totalPrice = phonePrice + charger * chargerQuantity + phoneCase * phoneCaseQuantity + extendedWarranty + insurance * 12;

console.log("Total Price: $" + totalPrice.toFixed(2));


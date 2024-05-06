/** ------- SCOPE --------
 * 
 * In JavaScript, the term "scope" refers to the context in which variables, functions, and objects are accessible.
 * Understanding scope is crucial for writing clean, maintainable, and bug-free code. 
 * JavaScript has two main types of scope: global scope and local scope. 
 * Block scope however was introduced in ES6 to help with scoping issues.
 */

/** ------ GLOBAL SCOPE -------- 
 * 
 * Variables and functions declared outside of any function or block have global scope.
 * 
 * Global variables and functions are accessible from anywhere in the code, including inside functions and blocks.
 * 
 * However, polluting the global scope with too many variables and functions can lead to naming conflicts and unintended consequences.
 * 
 * It is considered bad practice to define global variables
*/

// Example:

var globalVariable = "I am a global variable";

function globalFunction() {
    console.log("I am a global function");
}

console.log(globalVariable); // Output: I am a global variable
globalFunction(); // Output: I am a global function


/** ------- LOCAL SCOPE -------- 
 * 
 * Variables declared within a function have local scope.
 * 
 * Local variables are only accessible within the function or block in which they are declared.
 * 
 * Functions have access to variables declared within their containing function (outer scope), as well as any variables declared globally (global scope).
*/

// Example 1:
function outerFunction() {
    var localVariable = "I am a local variable";

    function innerFunction() {
        console.log(localVariable); 
        // Accessing local variable from outer funtyion
    }

    innerFunction();
}

outerFunction(); // Output: I am a local variable
console.log(localVariable); // Error: localVariable is not defined (outside its scope)

// Example 2:

function greet() {
	var greeting = "hello";
	console.log(greeting);
}

greet();
console.log(greeting); // gives uncaught Reference Error: greeting is not defined

/** ------- BLOCK SCOPE -------- 
 * 
 * Variables declared using **`let`** and **`const`** within a block (inside curly braces **`{}`**) have block scope
 * 
 * Block-scoped variables are only accessible within the block in which they are defined.
 * 
 * This helps prevent variable hoisting and accidental variable re-declarations.
*/

// Example:
{
    let blockVariable = "I am a block-scoped variable";
    console.log(blockVariable); // Output: I am a block-scoped variable
}

console.log(blockVariable); // Error: blockVariable is not defined (outside its scope)



/** ----- LOCALLY SCOPED VARIABLES OBSCURE GLOBAL SCOPED ------- */
var message = "bye";

function goodbye() {
	var message = "farewell";
	console.log(message);
}

goodbye();
console.log(message);

/**In this code, there are two variables called **message**. 
 * 
 * One is globally scoped and the other is scoped locally to**goodbye().**
 * 
 * Because a **message** variable is being declared inside goodbye() it obscures access to the the global message variable
 * 
 * Obscuring is not normally a problem - reusing variable names is normally fine, but if they do conflict with global variables you will have problems.
 * 
 * Best practice - Always use var (or **let**) when creating variables inside functions to prevent creating global variables */
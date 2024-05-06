/** ----- FUNCTIONS -----
 * Functions are a smaller programs within your larger programs
 * 
 * Functions wrap a set of statements that work together, usually compute one piece of output
 * 
 * Functions are essentially a variable that stores a function object
 *  - we can use a "callback" to call them over and over again as and where needed
 */

function exampleFunction() {
	console.log("My example function console log");
};

// Callback:
exampleFunction();

// ----- BUILT IN JS FUNCTIONS -------
alert("Hello, world!"); // yes this is a function!!!
console.log("hello world"); // same as this 

Number("123.5"); // returns the string as a number

parseFloat("321.98"); // returns a floating number from a string

parseInt("123", 10); // returns the string as number using decimal radix 0-9
// The parseInt() function parses a string argument and returns an integer of the specified radix

// ------ MODAL FUNCTIONS -------
alert("alert function");

confirm("confirm function");

/** When the browser executes the confirm() function a little window
 *  will display with your message along with: “OK” and “Cancel” 
 * 
 * You can capture the true or false value this returns for use later on: 
 */

function confirmExample() {
	var confirmCheck = confirm("do you want to delete");
	
	if (confirmCheck == true) {       // if statement to check value of confirmCheck
		console.log("deleted");
	} else {
		console.log("delete was canceled");
    }
}

/** ----- TIPS FOR WRITING GOOD FUNCTIONS -------
 * Keep your code well formatted. This will ensure your code is easy to read, modify and maintain.
 * 
 * Keep your spacing and indentation consistent across your code.
 * 
 * There a many popular ‘coding guides’ and styling options however we will teach you the most common 
 * - 1TBS or One True Coding Style.
 * 
 * A function should do one thing only. As a guideline, functions that are more than five statements long should probably
 * be broken up into smaller functions - you can nest functions!
 * 
 * A function should be named well. It should do what is says in the name. 
 * This helps to build self-documenting code
 * 
 * A function should perform reliably. When given an input it should give the same output each times - except when you
 * intend for it to behave randomly eg random value generators
 */
function wellFormatted(correctSpelling) {
	var oneSpace = "around operators";
	if (condition === "onOwnLine") {
		doAThing();
		bracesEasyToSeePair();
		semicolonsPresent();
	}
}

/** ------ FUNCTIONS - PARAMETERS & ARGUMENTS --------
 * 
 * PARAMETERS:
 * 
 * Parameters are variables listed as part of the function definition.
 * 
 * They act as placeholders for values that the function will receive when it is called.
 * 
 * Parameters are declared inside the parentheses () of a function declaration or expression.
 * 
 * They help make functions reusable and adaptable to different inputs.
 */

function greet(name) {
    console.log("Hello, " + name + "!");
}

// 'name' is a parameter of the 'greet' function

/**
 * ARGUMENTS:
 * 
 * Arguments are the actual values passed to a function when it is called.
 * 
 * They are the concrete values that are substituted for the parameters when the function is executed.
 * 
 * You can pass any number of arguments to a function, depending on its parameter list.
 * 
 * Arguments are specified inside the parentheses () when calling a function.
 */

greet("Alice"); // "Alice" is the argument

// We can change the variable by passing it into the callback. This would be an argument. For example:
greet("Ciaran"); // will log out "Hello, Ciaran!"
greet("Hackerman"); // will log out "Hello, Hackerman!"

/**
 * OPTIONAL PARAMETERS
 * 
 * Sometimes a function will only want a parameter some of the time. If the function is not provided a value for a
 * parameter, the capturing variable will be undefined.
 * 
 * For example by using the Logical OR operator we can make the following function check for a value in the "person"
 * variable OR display “world”:
 */

function hello(person) {
	person = person || "world";
	console.log("Hello, " + person + "!");
}

hello("David"); // logs "Hello, David!"
hello(); // logs "Hello, world

/** ------ HOISTING -------
 * When a variable is defined in a function, even if the variable is defined in the middle of a code block, 
 * the variable is actually being defined **before** any of the code in function runs.
 * 
 * The variable definition gets ***hoisted*** to the top of the function.
 * 
 * Both of the functions to the below, when called, will alert “undefined” and then “10”.
 * 
 * If you remember to define a variable before you use it, hoisting becomes a non issue.
 */

// Example:
function hoistAway() {
	alert(hoist);
	var hoist = 10;
	alert(hoist);
}

// is functionally equivalent to:

function hoistAwayEquivelent() {
	var hoist;
	hoist = 10;
	alert(hoist);
}

// do it as the bottom is done - declare variables at the top of your functions!
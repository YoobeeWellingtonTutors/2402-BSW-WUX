// ------ JS STATEMENT ------
/* Javascript programs are written line by line. 
Each line (or statement) is a command to the browser to do one thing. 
Example of a statement: */
alert("Hello, World!");

// ------ COMMENT TYPES IN JAVASCRIPT: ------

// One line comment can be used here
alert(10); // or here

/* Block comments can span over
multiple lines using the block
comment syntax */

/**
* This style of comment is called a DocBlack, and is often found
* in larger projects to serve as document for the thing that floows it.
* Javascript just sees a fancy block comment, but other tools will see the
* asterisks and read the ext and metadata in it which can be used to generate
* helpful books
*/

/**
 * ----------  EXERCISE TIME! --------
 * Create an alert for each of the follow and have them pop up in the correct order:
 * “Knock Knock”
 * “Who’s there?”
 * “Nobel”
 * “Nobel who?”
 * “No bell? That’s why i knocked!”
 * 
 * Create a DocBlock Comment at the beginning of the file to state what the code does
 * 
 * Create one line comments by each alert stating the order in which they appear
 */

// --------- ANSWER: ---------

/**
 * This script displays a series of alerts in the correct order to simulate a knock-knock joke.
 */

// Alert 1: "Knock Knock"
alert("Knock Knock"); // Order: 1

// Alert 2: "Who's there?"
alert("Who's there?"); // Order: 2

// Alert 3: "Nobel"
alert("Nobel"); // Order: 3

// Alert 4: "Nobel who?"
alert("Nobel who?"); // Order: 4

// Alert 5: "No bell? That's why I knocked!"
alert("No bell? That's why I knocked!"); // Order: 5


// ------------- VARIABLES IN JAVASCRIPT -------------

//Es5:
var username;
username = "Earl";
console.log(username);

//Es6:
let letUsername;
letUsername = "Bob";
console.log(letUsername)

// if we want to value to never change:
const usernameThatNeverChanges = "Bob";
console.log(usernameThatNeverChanges);

// --- Initialise a variable to assign value to later -----

// To assign a value we must call the assignment operator =
var username; // set up varaibles
var age;

//later in the code assign a value:
username = "Earl";
age = 27;

/** ---------- EXERCISE TIME ---------
 * Create the following variables with your details assigned to each:
 * var username
 * var age
 * var job
 * var workplace
 * 
 * Log out the following in your console using the variables correctly
 * “My name is ___  I am ___ years old. I work as a ____ at ___.”
 */


// ---------- Changing a variable --------- 
var coffeesConsumed = 2;
console.log(coffeesConsumed);         						// - logs out 2
coffeesConsumed = 3;
console.log(coffeesConsumed);          						// - logs out 3

// Assigning a variable to a new variable so we can store the previous value:

var coffeesConsumed = 2;
var coffeesPreviouslyConsumed = coffeesConsumed;
coffeesConsumed = 99; // assign new value to coffeesConsumed
console.log(coffeesConsumed);          						// - logs out 99
console.log(coffeesPreviouslyConsumed); 					// -logs out 2

// -------- Reference Error: variable is not found….. ---------
/** When you attempt to use a variable that has not been defined you may get an error:
 * 
 * Your Script:
 * console.log(exampleVariable);
 * 
 * Console Output:
 * Error: Uncaught ReferenceError: exampleVariable is not defined.
 * 
 * Always check your variables have values and are defined.
 * Always check your spelling - it can save you hours of debugging!!!
 * */
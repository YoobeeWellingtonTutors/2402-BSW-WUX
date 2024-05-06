/** ------ Conditionals --------
 * In JavaScript, conditions are used to control the flow of execution within a program based on certain criteria. Conditions are typically implemented using conditional statements, which allow the program to make decisions and execute different blocks of code depending on whether certain conditions are true/false or equal/not equal to a value.
 */

/** ----- Equality Operators ------
 * === Strict Equality
 * !== Strict Inequality
 * == Loose Equality
 * != Loose Inequality
 * 
 * Strict Equality or Inequality returns true if the two operands are the same type and have matching value.
 * Loose Inequality works the same as strict equality, except that if the two operands are of different types, it will attempt to coerce the types to match, and then checks if they match
 * 
 * Coercion is useful, but only when we can rely on it happening. 
 * Use only === and !==
 * Loose equality should be avoided
 */

// 1 === 1 // true - same type and value
// "joe" === "joe" // true - same type and value
// "joe" === "Joe" // false - case sensitive

// 7 === 10 // falase
// 1 === "1" // false - types do not match

// 1 == 1 // true
// "joe" == "joe" // true
// 7 == 10 // false
// 1 == "1" // true - due to coercion - end up matching

/** ------- Comparrison Operators -------
 * < Less than
 * > Greater than
 * <= Less than or equal to
 * >= Greater than or equal to
 * 
 * 1 < 2 // true
 * 7 > 10 // false
 * 2 <= 2 // true
 * 2 <= 3 // true
 * 8 >= 5 // true
 * 10 <= 7 //false
 */

/** ------ Using Logical & Comparospn Opeartors toghether --------
 * Conditions are where logical operators shine 
 */

// Example:
// Setup our variables
let apples = 10;
let banannas = 27;
let cherries = 2;
let shopOpen = true;

// log out to see if condition is true or false
// The condition:
// Are apples greater than 1 and or bananas greater than 1 
// and or cherries greater than 1
console.log(apples > 1 || bananas > 1 || cherries > 1); // true
console.log(!shopOpen); // false

/** ------- Conditional/Control Statements -------- */

/** --- if Statemenets ----
 * The if statement here has two parts: the "condition" and the "block". 
 * If the condition evaluates to true, the statements in the block will be executed.
*/

var username = prompt("What is your name?"); // prompt asking for users name

if (username === "Emmet") { // check answer of prompt 
	alert("everything is awesome!"); // alert if true
} 

alert("Hi, " + username + "!");

/** ---- if/else statements ------ 
 * if by itself checks if a conditions is true. 
 * 
 * If you’re only interested in the false you could flip the logic.
 * 
 * You could write both the strict equal and strict inequality statements - but remember D.R.Y. (Dont Repeat Yourself)
*/

// Example:
if (username !== "Emmet" && username !== "Lucy") {
	alert("Thank you for following the instructions");
}

// Instead write an if else statement and reduce the code duplication:
if (username === "Emmet" || username === "Lucy") {
	alert("everything is awesome, " + username + "!");
} else {
	alert("Thank you for following the instructions.");
}

/** ---- if else if else statements ------ 
 * You can check additional conditions if the first was false. 
 * 
 * The statement is looking for the first condition that is true.
*/

// Example:
// if (age < 1) {
// 	console.log("infant");
// } else if (age < 2) {
// 	console.log ("toddler");
// } else if (age < 13) {
// 	console.log("child");
// } else if (age < 16) {
// 	console.log("adolescent");
// } else {
// 	console.log("adult");
// }

/** ----- Nested if statements ------
 * You can even put if's inside other if's or inside functions.
 * 
 * Deeply nested if's are a sure sign that your code needs refactoring into functions.
 * 
 * Some programmers however would say this example is a border-line example of too much nesting:
 */

//Example:
function genderNoun(gender, age) {
    var adultAge = 16;
    if (gender === "female") {
        if (age > adultAge) {
            return "woman";
        } else {
            return "girl";
        }
    } else if (gender === "other") {
        if (age > adultAge) {
            return "non-binary adult"
        } else {
            return "non-binary adolescent"
        }
    } else {
        if (age > adultAge) {
            return "man";
        } else {
            return "boy";
        }
    }
}

console.log(genderNoun("male", 38));

/** ----- Switch Statements ----- 
 * Sometimes a stack of **if** statements is not the best for readability or maintainability
 * 
 * Here, depending on the value of name and its equality with each case the code after that case will be executed.
 * 
 * Here's how it works:
 * The `expression` is evaluated once and its value is compared with the values of each `case`
 * 
 * If a `case` matches the value of the `expression`, the code block following that `case` is executed until a `break` statement is encountered.
 * 
 * If no `case` matches the value of the `expression`, the code block following the `default` case (if provided) is executed.
 * 
 * The `break` statement is used to exit the switch statement. If omitted, the execution will continue to the next case (which is known as "falling through").
*/

// Example:
let fruit = "Apple";

switch(fruit) {
  case "Banana":
    console.log("Banana is a yellow fruit.");
    break;
  case "Apple":
    console.log("Apple is a red or green fruit.");
    break;
  case "Orange":
    console.log("Orange is a citrus fruit.");
    break;
  default:
    console.log("I don't know what fruit that is.");
}	// In this example, if fruit is "Apple", the code block under the case "Apple" will be executed, and the output will be "Apple is a red or green fruit.". If fruit is "Banana", the output will be "Banana is a yellow fruit.". If fruit is none of the specified cases, the code block under default will be executed, providing the output "I don't know what fruit that is."
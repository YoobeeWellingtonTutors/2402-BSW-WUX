/** ----- RETURNS -----
 * 
 * Usually, a function will return a value for use in the code where a function was invoked.
 *  
 * To make functions provide this value back to its caller we use the "return" keyword in a statement:
 */

function giveMeALetter(letter) {
	return letter + "!";
}

giveMeALetter("A"); // returns "A!"

/**
 * When JavaScript executes a return statement, it will stop working through the function 
 * and return to that the code that called the function. 
 * 
 * No other code inside the function after the return statement will execute:
 */

function meaningOfLife() {
	console.log("You will see this.");
	return 42;
	console.log("You will not see this");
}

// A more complex example - common use:
function welcomeScreen(isUserLoggedIn) {
    if (isUserLoggedIn === true) {
        return "Welcome"; // if true does not continue past here
    } else {
        return "Please sign in"; // if true does not continue past here
    }
}
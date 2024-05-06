/** ---- for loop ----- 
 * The for loop is used when you know the number of iterations required. 
 * It consists of three parts: initialization, condition, and increment/decrement.
 * 
 * Syntax:
 * 
 * for (initialization; condition; increment/decrement) {
 *  // code to be executed
 * }
*/

// Example - loops that log number 1 - 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

/** ----- while loop -----
 * The while loop is used when you don't know how many times the loop should run beforehand. 
 * 
 * It continues to execute the block of code as long as the condition remains true.
 */

//Example
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

/** ----- do... while loop ----- 
 * The do...while loop is similar to the while loop, but it ensures that the block of code is executed at least once before checking the condition.
*/

//Example - loop that prints numbers from 1 to 5
let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 5);

/** ------ for... in loop ------- 
 * The for...in loop is used to iterate over the properties of an object. 
 * It enumerates the enumerable properties of an object, including inherited ones.
*/

// Define an object
let myObj = {
    name: 'John',
    age: 30,
    city: 'New York'
};

// Iterate over the keys of the object using a for...in loop
for (let key in myObj) {
    console.log(key + " -> " + myObj[key]);
}

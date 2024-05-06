/** ------- ARRAYS ------
 * 
 * Arrays are a fundamental part of JavaScript programming, providing a versatile way to store and manipulate collections of data.
 *  
 * Sometimes we need to store a list of values eg Who’s coming to dinner? What were the team’s scores for the season?
 * 
 * An array is a data structure that allows you to store multiple values in a single variable. 
 * These values can be of any data type, including numbers, strings, objects, or even other arrays. 
 * 
 * Arrays in JavaScript are zero-indexed, meaning the first element is accessed with an index of 0, the second with an index of 1, and so on.
 * 
 * Arrays are ordered lists of data. 
 * 
 * Each item in the list is called an element which we can access by the the element’s index
 * 
 * We use square brackets to donate an Array literal.
 * 
 * We can loop over its elements the same way we loop over a strings characters
 * 
 * We can add and remove elements or change each element.
 */

/** ------- DECLARING ARRAYS -------- 
 * You can declare an array in JavaScript using square brackets [] and initialise it with values separated by commas. 
*/
let numbers = [1, 2, 3, 4, 5];
let fruit = ['apple', 'banana', 'orange'];
let mixedArray = [1, 'two', true, { key: 'value' }];

/** ------ ACCESSING ELEMENTS -------
 * 
 * Array elements are accessed using zero-based indices. You can access individual elements or iterate through the entire array using loops.
 * 
 * You can also check the length of an array using the length property:
 */

console.log(numbers[0]); // Output: 1
console.log(fruit[1]); // Output: banana

for (let i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
} // logs out the index number for each fruit in the array

console.log(fruit.length); // 

/** ------- ARRAY METHODS ------- */

// length() -  Property that indicates the number of elements in the array.
console.log(numbers.length); // Output: 5

// push() - Method to add elements to the end of an array.
numbers.push(6); // add the number 6 to the end of the array
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]

// pop() - Method to remove the last element from an array.
let lastElement = numbers.pop();
console.log(lastElement); // Output: 5
console.log(numbers); // Output: [1, 2, 3, 4]

// shift() - Method to remove the first element from an array.
let firstElement = numbers.shift();
console.log(firstElement); // Output: 1
console.log(numbers); // Output: [2, 3, 4, 5]

//unshift() - Method to add elements to the beginning of an array.
numbers.unshift(1);
console.log(numbers); // Output: [1, 2, 3, 4, 5]

// splice() - The splice() method changes the contents of an array by 
// removing or replacing existing elements and/or adding new elements in place.
// Remove 2 elements starting from index 2 and replace them with 'a', 'b', 'c'
numbers.splice(2, 2, 'a', 'b', 'c');
console.log(numbers); // Output: [1, 2, 'a', 'b', 'c', 5]

/** ------- SPLIT & JOIN --------
 * 
 * string.spilt( delimiter ) - We can create an array from a string using the "split" method
 * 
 * array.join( separator = “ , ” ) - We can create an string from an array using the "join" method. 
 * 
 * It coerces each elements value into a string, concatenates them, separating each element with the separator which defaults to ,
 */

let drivers = "Riccardo,Norris,Sainz,Verstappen,Russell,Leclerc".split(",");
console.log(drivers.length); // 6
console.log(drivers); // [Riccardo,Norris,Sainz,Verstappen,Russell,Leclerc]

let scores = [15,20,35,4,2];
console.log(scores.join()); // 15,20,35,4,2

/** ----- SORTING/REVERSING ARRAYS ------- 
 * We can sort an array in ascending order using sort()
 * 
 * To descend use reverse()
 * 
 * However this doesn’t work as expected when using varying case or numbers.
 * 
 * Remember: Numbers before letters, Capital before Lowercase
*/

// TRY THIS IN YOUR CONSOLE:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort()); // ['Apple', 'Banana', 'Mango', 'Orange']

// change a few to lowercase:
const newFruits = ["Banana", "orange", "Apple", "mango"];
console.log(newFruits.sort()); // ['Apple', 'Banana', 'mango', 'orange']

// Numbers before letters, Capital before lowercase

/** ------ COMPARE FUNCTIONS -------
 *  
 * In JavaScript, comparison functions are vital tools for sorting and organising data. 
 * 
 * They allow you to define custom rules for comparing two values and deciding their order.
 * 
 * Basic structure:
 * 
 * function compare(a, b) {
 *  // Comparison logic goes here
 * } 
*/

/** COMPARE NUMBERS - ascending order 
 * If `a` is less than `b`, `a - b` will yield a negative value, indicating `a` should precede `b`.
 * 
 * If `a` is greater than `b`, `a - b` will be positive, indicating `a` should follow `b`.
 * 
 * If `a` and `b` are equal, the result will be zero, meaning their order remains unchanged.
*/
function compareNumbers(a, b) {
    return a - b; // Ascending order
}

// Descending
function compareNumbersDescending(a, b) {
    return b - a; // Descending order
}

/** COMPARE STRING 
 * Sorting an array of strings involves comparing their lexicographical (alphabetical) order. 
 *
 * Here, `String.prototype.localeCompare()` method compares two strings and returns:
 * 
 * a negative value if **`a`** should come before **`b`**.
 * 
 * zero if they are considered equal.
 * 
 * a positive value if **`a`** should come after **`b`**.
*/
function compareStrings(a, b) {
    return a.localeCompare(b); // Lexicographical order
}

/** CASE INSENSITIVE SORTING
 *  To sort strings without considering their case, we can use a comparison function like this:
*/
function compareStringsIgnoreCase(a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
}
// In this function, toLowerCase() converts both strings to lowercase before comparison.

// SORTING AN OBJECT:

// Here we sort the students by age:
let students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 18 }
];

function compareStudentsByAge(a, b) {
    return a.age - b.age;
}

students.sort(compareStudentsByAge);
console.log(students);
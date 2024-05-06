// --------- STRING METHODS --------

/** --- STRING LENGTH ---
 * Strings have a property called length
 * length tells us how many characters are in the string:
 */
let string = "My string";
console.log(string.length); // check length 

// We can use this in conditions, like checking the minimum length for a name:
let name = prompt("What is your name?");
if (name.length < 2) {  // if name is less than 2 characters
    alert("Names are 2 or more characters. Try again");
} else { 
    alert("Hi " + name);
}

/** ----- STRING TRANSFORM METHODS ------- 
 * 
 * --- String.toLowerCase() & String.toUpperCase()---
 * These two methods work on the existing string and return it changed to lowercase or uppercase. 
 * They do not change the existing string.
*/

let message = "This text will be transformed"
// String.toLowerCase()
console.log(message.toLowerCase()); // "this text will be transformed"
// String.toUpperCase()
console.log(message.toUpperCase()); // "THIS TEXT WILL BE TRANSFORMED"

/** ---- String.trim() -----
 * This method will remove any whitspace from the start or end of the string
 */

let spaceMovies = "  Star Trek, Star Wars, Galaxy Quest,   Spaceballs     "
console.log(spaceMovies.trim());
// "Star Trek, Star Wars, Galay Quest,  Spaceballs"

/** ----- charAt(index) or "Character at" ----- 
 * charAt() accepts an integer representing the position in the string, 
 * and will return a string containing the character at that index in the string.
 * Important to remember that the index starts at 0
*/

let myName = "Ciaran";
console.log(myName.length); // 6 characters
console.log(myName.charAt(0)); // c
console.log(myName.charAt(1)); // i
console.log(myName.charAt(2)); // a
console.log(myName.charAt(3)); // r
console.log(myName.charAt(4)); // a
console.log(myName.charAt(5)); // n

console.log(myName.charAt(-1)); // empty as no character there
console.log(myName.charAt(10)); // empty as no character there

// Loop over myName and log out the charcter at each index:
for (let i = 0; i < myName.length; i += 1) {
    console.log(myName.charAt(i));
}

/** ------ substr( startIndex, length )  ------- 
 * substr returns a substring - a segment of a string, 
 * starting at the "startIndex", and returning all the characters from that point, 
 * up to "length" characters.
 * 
 * We can also provide a negative start index. 
 * This will count back from the end of the string - see loop example
 * 
 * substr is considered a legacy function - use substring where possible instead.
*/

let phrase = "Concatenation";
console.log(phrase.substr(0,5)); // Conca
console.log(phrase.substr(5)); // tenation
console.log(phrase.substr(2,3)); // nca
console.log(phrase.substr(-3)); // ion
console.log(phrase.substr(-3,2)); // io

for (let i = 0; i < phrase.length; i += 1) {
    console.log(phrase.substr(i,3));
}
// LOOP RESULTS:
// con
// onc
// cat
// ....... and so forth

/** ------- substring(indexA, indexB) ---------
 * substring is very similar to substr but its second parameter is not length 
 * but the index of the first character not to be included
 * 
 * If indexA is bigger than indexB substring will use them swapped - see second example
 * 
 * substring does not support negative startIndex
 */

let example = "Caroline";
console.log(example.substring(0,5)); // "Carol"
console.log(example.substring(5)); // "ine"
console.log(example.substring(2,3)); // "r"
console.log(example.substring(-3)); // "Caroline"
console.log(example.substring(-3,2)); // "Ca"
console.log(example.substring(5,10)); // "ine"

// Index A bigger than Index B:
console.log(example.substring(5,3)); // "rol"

/** ------- slice(indexA, indexB) -------
 * slice is a better version of substring
 * 
 * It will support negative indices, and does not swap them
 */

let champion = "Verstappen";
console.log(champion.slice(0,3)); "Ver"
console.log(champion.slice(5)); "appen"
console.log(champion.slice(-4)); "ppen"
console.log(champion.slice(-5,-1)); "appe"


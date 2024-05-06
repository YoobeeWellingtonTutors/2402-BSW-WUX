/** ------ DOM MANIPULATION ------- */

/** ---- SELECTING ELEMENTS ------ */

// ---- getElementById()
const myElementIdDiv = document.getElementById("myElement");

// ----- getElementsByClassName() - returns a collection of elements (an array)
const myListItems = document.getElementsByClassName("listItem");
console.log(myListItems)

for (let i = 0; i < myListItems.length; i++) {
    myListItems[i].style.color = "red"
}

// get the elements:
const redDivs = document.getElementsByClassName("red");
console.log(redDivs)

// loop over elements:
for (let i = 0; i < redDivs.length; i++) {
    redDivs[i].style.backgroundColor = "yellow"
}

// ------ getElementsByTagName() - getting elements based on the element tag eg div, li, ul
const allDivs = document.getElementsByTagName("div");
console.log(allDivs);

// for (let i = 0; i < allDivs.length; i++) {
//     allDivs[i].style.display = "none";
// }

// AVOID USING!!!

// ------ querySelector() - this method selects the first element that matches the CSS selector
const firstRedDiv = document.querySelector('.red');
firstRedDiv.style.backgroundColor = "pink"

// ------ querySelectorAll() - all elements that matches the selector
const querySelectorItems = document.querySelectorAll('.querySelectorAll');
console.log(querySelectorItems);

for (let i = 0; i < querySelectorItems.length; i++) {
    querySelectorItems[i].style.backgroundColor = "grey"
}

/** -------- Manipulating Elements ---------- */

// textContent - only changes the text
const myHeading = document.getElementById('myHeading');
myHeading.textContent = "Heading has been changed";

// innerHTML - change the HTML content of an element
// const myElementIdDiv = document.getElementById("myElement");
myElementIdDiv.innerHTML = `
    <p>ANY HTML I WANT. Use backticks to allow for template literals (JavaScript) to be used inside of this HTML</p>
`

// setAttribute - change/modify attributes of an elements using JavaScript
// const myHeading = document.getElementById('myHeading');
myHeading.setAttribute('class', 'hover');
// first arguement is the attribute you want to change, second it what you're changing it to

// Styling Elements - change css style via JS
// const myElementIdDiv = document.getElementById("myElement");
myElementIdDiv.style.border = "5px solid pink"
myElementIdDiv.style.cursor = "pointer"
// each and every CSS property.....

/** ----- CREATE NEW ELEMENTS --------
 * We can new elements dynamically and "append" them to the document 
 */

// Step 1 - set up variable for the new Element:
const newElement = document.createElement('div');
newElement.textContent = "New Element";
// Apply styling to the element - in this case gie it the calss of "red"
newElement.setAttribute('class', 'red');
// Step 2 - append to the element you want - in this case it is being appended to the body - so the whole HTML doc
document.body.appendChild(newElement);



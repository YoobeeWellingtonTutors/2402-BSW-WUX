// ALERts - these are a great way to test you script file has been linked correctly and is working

// // 1st
// alert("Hello, 2402!");
// // 2nd
// alert("Ciaran");

// // alert("Liam");
// // 4th 
// alert("Slow");

// This is a javascript comment


// VARIABLES
var myName = "Ciaran"
// log out to console - console tab in the developer tools
console.log(myName);

var className = "2402-BSW-WUX"
console.log(className);


//  FUNCTION
// Step 1 - define the function:
function alertOnClick() {
    alert("this is from my function");
}
// Step 2 - Call the function:
// alertOnClick(); - commented out to stop the alert :)



// CHANGE COLOUR OF BACKGROUND USING JS AND THE BUTTON

// Step 1 - Get the HTML element "The button" and set a variable equal to the element
var button = document.getElementById("change-button");
// Step 2 - Create a function to run when button is clicked:
function changeColour() {
    console.log("function is working");
    document.body.style.backgroundColor = "red";
    // Change bg colour of the button
    button.style.backgroundColor = "yellow";
}
// Step 3 = add Click Event listener to the button and call the function
button.addEventListener("click", changeColour)

// ****** CHALLENGE ********

// Create 3 buttons - blue, yellow and green
// Change body bg colour to each button colour
// write the corresponding functions for each

// ANSWER:

// var greenButton = document.getElementById("green-button");
// var blueButton = document.getElementById("blue-button");
// var yellowButton = document.getElementById("yellow-button");

// function changeColourGreen() {
//     console.log("green function is working");
//     document.body.style.backgroundColor = "green";
// }

// function changeColourBlue() {
//     console.log("blue function is working");
//     document.body.style.backgroundColor = "blue";
// }

// function changeColourYellow() {
//     console.log("yellow function is working");
//     document.body.style.backgroundColor = "yellow";
// }

// greenButton.addEventListener("click", changeColourGreen)
// blueButton.addEventListener("click", changeColourBlue)
// yellowButton.addEventListener("click", changeColourYellow)

// REFACTOR USING ARGUEMENTS & PARAMETERS

function changeBg(colour) {
    console.log("change color click is working");
    document.body.style.backgroundColor = colour;
}

changeBg("red");


greenButton.addEventListener("click", function () {
    changeBg("green");
});

blueButton.addEventListener("click", function () {
    changeBg("blue");
});

yellowButton.addEventListener("click", function () {
    changeBg("yellow");
});

// HIDE/SHOW

// NB - must set up CSS first!!!!

//Step 1 - get the trigger - the hide button:
var hideButton = document.getElementById("hide-button");

// Step 2 - add Event listener to the button
hideButton.addEventListener("click", function () {
    // log for testing
    console.log("hide buttom is working");

    var box = document.getElementById("box");
    // add to class list and add the "hide" class
    box.classList.add("hide");
});

// Show Box

var showButton = document.getElementById("show-button");

showButton.addEventListener("click", function () {
    console.log("show button is working")

    var box = document.getElementById("box");
    // set the class list equal to what we type
    box.classList =  "box";
});

// Toggle colour

var toggleButton = document.getElementById("toggle-button");

toggleButton.addEventListener("click" , function () {
    console.log("toggle is working");

    var box = document.getElementById("box");

    box.classList.toggle("toggle");
});



// alert("Hi im working!");
console.log("javascript is working");

// VANILLA NON REFACTORED ES 5

// // Open Menu
// document.getElementById('openHam').addEventListener('click' , function() {
//     console.log("hamburger button is working");
//     // Change display of nav items to flex so  they show:
//     document.getElementById('navigation-items').style.display = 'flex';
//     // Show close icon
//     document.getElementById('closeHam').style.display = 'block';
//     // Hide openHam icon
//     this.style.display = 'none'; // 'this' refers to the clicked element (openHam)
// });

// // Close Menu
// document.getElementById('closeHam').addEventListener('click' , function() {
//     console.log('close button is working');
//     document.getElementById('navigation-items').style.display = 'none';
//     document.getElementById('openHam').style.display = 'block';
//     this.style.display = 'none';
// });

// ES6 - refactor, arguements and parameters

// var openButton = document.getElementById('openHam')

// // const
// let ciaran = "male tutor"
// console.log(ciaran);

// ciaran = "female ballerina"
// console.log(ciaran)

let openHam = document.getElementById('openHam');
let closeHam = document.getElementById('closeHam');
let navigationItems = document.getElementById('navigation-items');

// Arrow Function with arguements & parameters
const hamburgerEvent = (navigation, close, open) => {
    navigationItems.style.display = navigation;
    closeHam.style.display = close;
    openHam.style.display = open;
};

// Add function to click events with the correct paramenters
openHam.addEventListener('click', () => hamburgerEvent("flex", "block", "none"));
closeHam.addEventListener('click', () => hamburgerEvent("none", "none", "block"));












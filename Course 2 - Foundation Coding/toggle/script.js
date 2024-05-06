// Get elements:
const button1 = document.getElementById('box-one');
const button2 = document.getElementById('box-two');
const button3 = document.getElementById('box-three');
const button4 = document.getElementById('box-four');

// Add clicks:
button1.addEventListener('click', function() {
    console.log("button1 clicked");
    button1.classList.toggle("clicked-button-one");
});

button2.addEventListener('click', function() {
    console.log("button2 clicked");
    button2.classList.toggle("clicked-button-two");
});

button3.addEventListener('click', function() {
    console.log("button3 clicked");
    button3.classList.toggle("clicked-button-three");
});

button4.addEventListener('click', function() {
    console.log("button4 clicked");
    button4.classList.toggle("clicked-button-four");
});
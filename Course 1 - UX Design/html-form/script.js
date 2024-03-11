console.log('working');

// On Click on the sumbit button which "prevents its default behaviour"
let submitButton = document.getElementById('formSubmit');

submitButton.addEventListener('click', function(event) {
    event.preventDefault();
});
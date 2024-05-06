

// ---- Getting the values from the user input---- 
// Get the elements/inputs:
const firstnameInput = document.getElementById('firstname');
const lastnameInput = document.getElementById('lastname');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const countryInput = document.getElementById('country');
const cityInput = document.getElementById('city');
const postcodeInput = document.getElementById('postcode');
const contactPhoneInput = document.getElementById('contact-phone');
// get the results div
const results = document.getElementById('results')

const submitButton = document.getElementById('submitBtn');

submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    let userData = {
        firstname: firstnameInput.value,
        lastname: lastnameInput.value,
        email: emailInput.value,
        password: confirmPasswordInput.value,
        country: countryInput.value,
        city: cityInput.value,
        postcode: postcodeInput.value,
        contactPhone: contactPhoneInput.value
    }
    console.log(userData)
    populateResults(userData);
});

function populateResults(userData) {
    results.innerHTML = `
        <h2>${userData.firstname} ${userData.lastname}</h2>
        <h3>${userData.email}</email>
        <p>${userData.password}</p>
        <p>${userData.country}</p>
        <p>${userData.city}</p>
        <p>${userData.postcode}</p>
        <p>${userData.contactPhone}</p>
    `
}


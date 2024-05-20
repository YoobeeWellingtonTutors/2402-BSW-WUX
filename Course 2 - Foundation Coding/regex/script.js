document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Regular expressions
    const usernameRegex = /^[a-zA-Z0-9]{5,15}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    
    // Input elements
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    
    // Error elements
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    let isValid = true;
    
    // Validate username
    if (!usernameRegex.test(usernameInput.value)) {
        usernameError.style.display = 'inline';
        isValid = false;
    } else {
        usernameError.style.display = 'none';
    }

    // Validate email
    if (!emailRegex.test(emailInput.value)) {
        emailError.style.display = 'inline';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    // Validate password
    if (!passwordRegex.test(passwordInput.value)) {
        passwordError.style.display = 'inline';
        isValid = false;
    } else {
        passwordError.style.display = 'none';
    }

    if (isValid) {
        alert('Form submitted successfully!');
        // Optionally, you can submit the form here using AJAX or any other method
    }
});

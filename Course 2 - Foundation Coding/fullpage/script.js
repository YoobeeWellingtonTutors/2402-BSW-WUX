$(document).ready(function () {
    // *** ALL JS IS WRITTEN IS HERE ***

    // FULLPAGE Initialisation
    new fullpage('#fullpage', {
        // licence
        licenseKey: 'gplv3-license', // Open Source Free licence
        //options here
        autoScrolling: true,
        scrollHorizontally: true,
        // turn on navigation arrows:
        // navigation: true, // comment out or remove to remove nav arrows
        controlArrows: false,
    });

    fullpage_api.setAllowScrolling(false); // prevent scroll of sections and slides

    //  Function to move to the specified section
    function moveToSection(number) {
        fullpage_api.moveTo(number); // allows you to move sections or "jump"
    }

    $('#goToSection1').click(function() {
        moveToSection(1);
    });

    $('#goToSection2').click(function() {
        moveToSection(2);
    });

    $('#goToSection3').click(function() {
        moveToSection(3);
    });

    $('#goToSection4').click(function() {
        moveToSection(4);
    });

    // Move to slide # - first number is sectin, second is slide - zero indexed for slides
    $('#goToSlide1').click(function() {
        fullpage_api.moveTo(1, 0);
    });

    $('#goToSlide2').click(function() {
        fullpage_api.moveTo(1, 1);
    });

    // $('#goToSlide3').click(function() {
    //     fullpage_api.moveTo(1, 2);
    // });

    $('#goToSlide4').click(function() {
        fullpage_api.moveTo(1, 3);
    });

    // moveSilently:
    $('#goToSlide3').click(function() {
        fullpage_api.silentMoveTo(1, 2);
    });

    // Set Up a Variable to track the User
    let user;

    // Click on the submit Button:
    $('#submitButton').click(function(event) {
        event.preventDefault();
        console.log('working');

        // Setup Regex for form validation:
        const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        // Get input values:
        const username = $('#username').val();
        const email = $('#email').val();
        const password = $('#password').val();

        console.log(username + password + email);

        // Test against regex for form validation:
        if (!usernameRegex.test(username)) {
            $('#formMessage').html(`<p>'Invalid username. Must be 3-15 characters long and contain only letters, numbers, and underscores.'</p>`);
        } else if (!emailRegex.test(email)) {
            $('#formMessage').html(`<p>'Invalid email format.'</p>`);
        } else if (!passwordRegex.test(password)) {
            $('#formMessage').html(`<p>'Password must be at least 8 characters long and contain both letters and numbers.'</p>`);
        } else {
            // if passed all regex tests:
            $('#formMessage').html('');
            // set user equal to the username:
            user = username;//
            console.log(user);
            // Set the logged in user span to the user value:
            checkForLoggedInUser();
            // Move to slide 2 of section 1
            fullpage_api.moveTo(1,1); // slide 2
        }
    })

    function checkForLoggedInUser() {
        if (!user) {
            console.log("log in");
        }
        else {
            console.log(user);
            $('#slide2').html(`<h2>Hey, <span id="loggedInUser">${user}</span>!</h2>`);
            $('nav').html(`<h2>Welcome Back, <span id="loggedInUser">${user}</span>!</h2>`);
        }
    }

    checkForLoggedInUser(); // because no vlaue is assigned to user it treats it as false

});
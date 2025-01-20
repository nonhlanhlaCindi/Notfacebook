document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const cellphone = document.getElementById('cellphone');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    form.addEventListener('submit', function(event) {
        event.preventDefault();  

        let formValid = true;
        
       
        if (username.value.trim() === "") {
            alert("Username is required!");
            formValid = false;
        }

        
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email.value.trim())) {
            alert("Please enter a valid email address!");
            formValid = false;
        }

       
        const cellphonePattern = /^\d+$/;
        if (!cellphonePattern.test(cellphone.value.trim())) {
            alert("Cellphone number must be numeric!");
            formValid = false;
        }

        
        if (password.value.trim() === "") {
            alert("Password is required!");
            formValid = false;
        }

     
        if (confirmPassword.value.trim() === "") {
            alert("Please confirm your password!");
            formValid = false;
        }

        
        if (password.value !== confirmPassword.value) {
            alert("Passwords do not match!");
            formValid = false;
        }

       
        if (formValid) {
            alert("Registration successful!");
            window.location.href = "http://127.0.0.1:5500/HTML/signin.html"; 
        }
    });
});




        // Wait until the DOM is fully loaded
        document.addEventListener("DOMContentLoaded", function () {
            const signInForm = document.getElementById('signInForm');
            const errorMessage = document.getElementById('error-message');

            // Handle form submission
            signInForm.addEventListener('submit', function (e) {
                e.preventDefault(); // Prevent form submission for validation

                // Clear any previous error messages
                errorMessage.style.display = 'none';
                errorMessage.textContent = '';

                // Get the values from the form inputs
                const email = document.getElementById('email').value.trim();
                const password = document.getElementById('password').value.trim();

                // Validation logic
                if (email === '' || password === '') {
                    errorMessage.textContent = 'Please fill in both fields.';
                    errorMessage.style.display = 'block';
                } else if (!validateEmail(email)) {
                    errorMessage.textContent = 'Please enter a valid email address.';
                    errorMessage.style.display = 'block';
                } else {
                    // If validation is successful, navigate to the sign-up page
                    window.location.href = "http://127.0.0.1:5500/HTML/notfacebook.html"; // Adjust this URL as needed
                }
            });

            // Simple email validation function
            function validateEmail(email) {
                const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
                return emailPattern.test(email);
            }
        });
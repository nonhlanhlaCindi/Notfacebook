
      
        document.addEventListener("DOMContentLoaded", function () {
            const signInForm = document.getElementById('signInForm');
            const errorMessage = document.getElementById('error-message');

            signInForm.addEventListener('submit', function (e) {
                e.preventDefault(); 

                
                errorMessage.style.display = 'none';
                errorMessage.textContent = '';

               
                const email = document.getElementById('email').value.trim();
                const password = document.getElementById('password').value.trim();

               
                if (email === '' || password === '') {
                    errorMessage.textContent = 'Please fill in both fields.';
                    errorMessage.style.display = 'block';
                } else if (!validateEmail(email)) {
                    errorMessage.textContent = 'Please enter a valid email address.';
                    errorMessage.style.display = 'block';
                } else {
                   
                    window.location.href = "http://127.0.0.1:5500/HTML/notfacebook.html"; 
                }
            });

           
            function validateEmail(email) {
                const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
                return emailPattern.test(email);
            }
        });
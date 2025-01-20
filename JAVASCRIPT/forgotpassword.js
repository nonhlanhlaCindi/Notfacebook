document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const emailInput = document.getElementById("email");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); 

        const emailValue = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(emailValue)) {
            alert("Please enter a valid email address.");
            return;
        }

        
        alert("Reset link has been sent to your email address!");

        
        window.location.href = "forgotpassword.html"; 
    });
});

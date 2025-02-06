document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const emailInput = document.getElementById("email");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent form submission for validation

        const emailValue = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(emailValue)) {
            alert("Please enter a valid email address.");
            return;
        }

        // If valid, show success popup and redirect
        alert("Reset link has been sent to your email address!");

        // Redirect to Forgot Password page
        window.location.href = "forgotpassword.html"; // Adjust the file name/path if needed
    });
});

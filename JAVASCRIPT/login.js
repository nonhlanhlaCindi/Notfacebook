document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');
    const username = document.getElementById('username');
    const password = document.getElementById('password');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        if (username.value.trim() === "") {
            alert("Please enter your username.");
            username.focus();
            return;
        }

        if (password.value.trim() === "") {
            alert("Please enter your password.");
            password.focus();
            return;
        }

        alert("Login successful!");
        window.location.href = "./notfacebook.html";
    });
});

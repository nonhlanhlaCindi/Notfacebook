document.addEventListener("DOMContentLoaded", () => {
    const splashScreen = document.getElementById("splash-screen");
    const mainContent = document.getElementById("main-content");

    // Hide the splash screen after 3 seconds
    setTimeout(() => {
        splashScreen.classList.add("hidden");
        mainContent.classList.remove("hidden");

        // Redirect to the login page after hiding the splash screen
        window.location.href = "http://127.0.0.1:5500/index.html"; // Replace with your actual login page URL
    }, 3000); // 3000ms = 3 seconds
});

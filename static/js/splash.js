document.addEventListener("DOMContentLoaded", () => {
    const splashScreen = document.getElementById("splash-screen");
    const mainContent = document.getElementById("main-content");

   
    setTimeout(() => {
        splashScreen.classList.add("hidden");
        mainContent.classList.remove("hidden");

validations
      
        window.location.href = "../HTML/signin.html";
    }, 5000); 

    


        // Redirect to the login page after hiding the splash screen
        window.location.href = "../HTML/signin.html"; // Replace with your actual login page URL
    }, 3000); // 3000ms = 3 seconds
});

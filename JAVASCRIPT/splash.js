document.addEventListener("DOMContentLoaded", () => {
    const splashScreen = document.getElementById("splash-screen");
    const mainContent = document.getElementById("main-content");

   
    setTimeout(() => {
        splashScreen.classList.add("hidden");
        mainContent.classList.remove("hidden");

      
        window.location.href = "../HTML/signin.html";
    }, 5000); 

    

});

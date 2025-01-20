document.addEventListener("DOMContentLoaded", function () {
    const statusForm = document.getElementById("status-form");
    const statusText = document.getElementById("status-text");
    const statusImageInput = document.getElementById("status-image");
    const statusesContainer = document.getElementById("statusesContainer");
    const addFriendButtons = document.querySelectorAll(".card-info button");

    statusForm.addEventListener("submit", function (e) {
        e.preventDefault(); 

        const caption = statusText.value.trim();
        const imageFile = statusImageInput.files[0];

        if (!caption && !imageFile) {
            alert("Please enter a caption or upload an image!");
            return;
        }

       
        const statusElement = document.createElement("div");
        statusElement.classList.add("status");

       
        if (caption) {
            const captionElement = document.createElement("p");
            captionElement.textContent = caption;
            statusElement.appendChild(captionElement);
        }

       
        if (imageFile) {
            const reader = new FileReader();
            reader.onload = function (event) {
                const imageElement = document.createElement("img");
                imageElement.src = event.target.result;
                imageElement.alt = "Uploaded Image";
                statusElement.appendChild(imageElement);
            };
            reader.readAsDataURL(imageFile);
        }

       
        statusesContainer.prepend(statusElement);

    
        statusText.value = "";
        statusImageInput.value = "";
    });

    
    addFriendButtons.forEach((button) => {
        button.addEventListener("click", function () {
           
            if (button.textContent === "Friend Request Sent") {
                alert("You've already sent a friend request to this person!");
                return;
            }

            
            button.textContent = "Friend Request Sent";

           
            button.disabled = true;

            
            console.log(`Friend request sent to ${button.parentElement.querySelector("h3").textContent}`);
        });
    });
});


    



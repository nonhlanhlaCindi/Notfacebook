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

        // Create a new status element
        const statusElement = document.createElement("div");
        statusElement.classList.add("status");

        // Add caption if available
        if (caption) {
            const captionElement = document.createElement("p");
            captionElement.textContent = caption;
            statusElement.appendChild(captionElement);
        }

        // Add uploaded image if available
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

        // Add the new status to the top of the statuses container
        statusesContainer.prepend(statusElement);

        // Clear the form
        statusText.value = "";
        statusImageInput.value = "";
    });

    // Add event listeners to each button
    addFriendButtons.forEach((button) => {
        button.addEventListener("click", function () {
            // Check if the button has already been clicked
            if (button.textContent === "Friend Request Sent") {
                alert("You've already sent a friend request to this person!");
                return;
            }

            // Update button text to indicate the friend request is sent
            button.textContent = "Friend Request Sent";

            // Optional: Disable the button to prevent further clicks
            button.disabled = true;

            // Log or perform additional actions if needed
            console.log(`Friend request sent to ${button.parentElement.querySelector("h3").textContent}`);
        });
    });
});


    



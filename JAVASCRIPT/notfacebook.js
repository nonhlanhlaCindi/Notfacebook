document.addEventListener("DOMContentLoaded", function() {
    const statusForm = document.getElementById("status-form");
    const statusText = document.getElementById("status-text");
    const statusesContainer = document.getElementById("statusesContainer");

    // Event listener for form submission
    statusForm.addEventListener("submit", function(e) {
        e.preventDefault(); // Prevent form submission

        // Get the status text
        const status = statusText.value.trim();

        // Check if the status is not empty
        if (status !== "") {
            // Create a new status element
            const statusElement = document.createElement("div");
            statusElement.classList.add("status");

            // Add the profile image and text to the status element
            statusElement.innerHTML = `
                <div class="status-header">
                    <img src="../RESOURCES/blank-profile-picture-973460_1280.webp" alt="Profile" class="profile-img">
                    <h4>Public</h4>
                </div>
                <p>${status}</p>
            `;

            // Append the new status to the container
            statusesContainer.appendChild(statusElement);

            // Clear the textarea after posting
            statusText.value = "";
        } else {
            alert("Please enter a status!");
        }
    });
});
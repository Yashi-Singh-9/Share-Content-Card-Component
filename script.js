document.addEventListener("DOMContentLoaded", () => {
  const socialIcons = document.querySelectorAll(".social-icons a");
  const copyButton = document.getElementById("copy-button");
  const shareLinkInput = document.getElementById("share-link");
  const copyMessage = document.getElementById("copy-message");

  // Handle icon selection
  socialIcons.forEach((icon) => {
      icon.addEventListener("click", (e) => {
          e.preventDefault();

          // Remove 'selected' class from all icons
          socialIcons.forEach((icon) => icon.classList.remove("selected"));

          // Add 'selected' class to the clicked icon
          icon.classList.add("selected");
      });
  });

  // Copy link functionality
  copyButton.addEventListener("click", () => {
      // Select the link in the input
      shareLinkInput.select();
      shareLinkInput.setSelectionRange(0, 99999); // For mobile compatibility

      // Copy the text to clipboard
      navigator.clipboard.writeText(shareLinkInput.value)
          .then(() => {
              // Show success message
              copyMessage.textContent = "Link copied!";
              copyMessage.style.display = "block";

              // Hide the message after 2 seconds
              setTimeout(() => {
                  copyMessage.style.display = "none";
              }, 2000);
          })
          .catch(() => {
              copyMessage.textContent = "Failed to copy!";
              copyMessage.style.display = "block";

              setTimeout(() => {
                  copyMessage.style.display = "none";
              }, 2000);
          });
  });
});

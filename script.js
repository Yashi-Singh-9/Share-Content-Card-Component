document.addEventListener("DOMContentLoaded", () => {
    const copyButton = document.getElementById("copy-button");
    const shareLink = document.getElementById("share-link");
    const copyMessage = document.getElementById("copy-message");
  
    // Add a click event listener to the copy button
    copyButton.addEventListener("click", () => {
      // Select the text in the input
      shareLink.select();
      shareLink.setSelectionRange(0, 99999); // For mobile devices
  
      // Copy the text to the clipboard
      navigator.clipboard.writeText(shareLink.value).then(() => {
        // Show success message
        copyMessage.textContent = "Link copied!";
        copyMessage.style.display = "block";
  
        // Hide the message after 2 seconds
        setTimeout(() => {
          copyMessage.style.display = "none";
        }, 2000);
      }).catch(err => {
        console.error("Failed to copy: ", err);
        copyMessage.textContent = "Failed to copy!";
        copyMessage.style.color = "red";
        copyMessage.style.display = "block";
  
        // Hide the message after 2 seconds
        setTimeout(() => {
          copyMessage.style.display = "none";
        }, 2000);
      });
    });
  
    // Add functionality for "selected" class toggle
    const socialIcons = document.querySelectorAll(".social-icons a");
    socialIcons.forEach(icon => {
      icon.addEventListener("click", (e) => {
        e.preventDefault();
        // Remove "selected" class from all icons
        socialIcons.forEach(icon => icon.classList.remove("selected"));
        // Add "selected" class to the clicked icon
        icon.classList.add("selected");
      });
    });
  });
  
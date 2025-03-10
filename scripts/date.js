document.addEventListener("DOMContentLoaded", () => {
    // Dynamically set the copyright year
    document.querySelector("#copyrightYear").textContent = new Date().getFullYear();

    // Display the last modified date
    document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;
});

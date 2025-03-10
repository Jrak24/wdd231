document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".menu-button");
    const navMenu = document.querySelector(".nav-menu");

    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("open");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menu");
    const navLinks = document.getElementById("nav-links");

    menuButton.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });
});

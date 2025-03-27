// FOOTER
    // Get current year
const currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;

    // Get last modified
const lastModified = document.lastModified;
document.getElementById("last-modified").textContent = lastModified;

// HAMBURGER MENU
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}
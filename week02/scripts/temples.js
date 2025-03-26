// FOOTER
    // Get current year
const currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;

    // Get last modified
const lastModified = document.lastModified;
document.getElementById("last-modified").textContent = lastModified;

hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}


// HAMBURGER MENU
// const hamburger = document.querySelector(".hamburger");
// const navBar = document.querySelector(".nav-bar");

// hamburger.addEventListener("click", () => {
//     hamburger.classList.toggle(".nav-bar");
//     navBar.classList.toggle("active");
// })
const barButton = document.getElementById("barbutton");
const navItems = document.getElementById("nav-links");
const revenir = document.getElementById("revenir");

barButton.addEventListener("click", () => {
    navItems.classList.toggle("active");
});
revenir.addEventListener("click", () => {
    navItems.classList.remove("active");
    });
// Toggle Navigation
const menuBtn = document.querySelector("#menu-btn");
const navMenu = document.querySelector("#nav-menu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");

    const expanded = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-expanded", !expanded);
});


// Footer Year
const yearSpan = document.querySelector("#year");
yearSpan.textContent = new Date().getFullYear();

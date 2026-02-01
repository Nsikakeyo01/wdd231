// Responsive navigation toggle
const menuButton = document.getElementById("menu-button");
const navLinks = document.getElementById("nav-links");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

// Open modals
document.querySelectorAll("[data-modal]").forEach(button => {
    button.addEventListener("click", () => {
        const modalId = button.dataset.modal;
        document.getElementById(modalId).showModal();
    });
});

// Close modals
document.querySelectorAll("dialog button").forEach(button => {
    button.addEventListener("click", () => {
        button.closest("dialog").close();
    });
});

// Fill hidden timestamp
document.getElementById("timestamp").value = new Date().toISOString();

// Page load fade-in animation
document.body.style.opacity = 0;
window.addEventListener("load", () => {
    document.body.style.transition = "opacity 1s ease-in";
    document.body.style.opacity = 1;
});

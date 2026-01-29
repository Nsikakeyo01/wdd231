// Timestamp
const timestamp = document.querySelector("#timestamp");
if (timestamp) {
    timestamp.value = new Date().toISOString();
}

// Footer year
const yearSpan = document.querySelector("#year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Mobile menu
const menuButton = document.querySelector("#menuButton");
const navList = document.querySelector("#navList");
menuButton.addEventListener("click", () => navList.classList.toggle("open"));

// Modals (NO inline onclick)
document.querySelectorAll(".open-modal").forEach(button => {
    button.addEventListener("click", () => {
        const modalId = button.closest(".card").dataset.modal;
        document.getElementById(modalId).showModal();
    });
});

document.querySelectorAll(".close-modal").forEach(button => {
    button.addEventListener("click", () => {
        button.closest("dialog").close();
    });
});
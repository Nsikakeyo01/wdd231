const timestamp = document.querySelector("#timestamp");
if (timestamp) {
    timestamp.value = new Date().toISOString();
}

const yearSpan = document.querySelector("#year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

const menuButton = document.querySelector("#menuButton");
const navList = document.querySelector("#navList");

menuButton.addEventListener("click", () => {
    navList.classList.toggle("open");
});
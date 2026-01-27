// join.js - Page-specific JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // -------- Update hidden timestamp field --------
    const timestampInput = document.getElementById('timestamp');
    if (timestampInput) {
        timestampInput.value = new Date().toISOString();
    }

    // -------- Update footer year automatically --------
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.textContent = currentYear;
    }
});
// Populate thank you page with form data
const params = new URLSearchParams(window.location.search);

const fields = ["fname", "lname", "email", "phone", "orgname", "timestamp"];

fields.forEach(field => {
    const element = document.getElementById(field);
    if (element) {
        element.textContent = params.get(field) || "N/A";
    }
});

// Footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}
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
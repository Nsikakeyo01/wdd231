// Hamburger menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
menuToggle.addEventListener('click', () => navLinks.classList.toggle('show'));

// Modals
document.querySelectorAll('.modal-btn').forEach(btn => {
    const modalId = btn.dataset.modal;
    const modal = document.getElementById(modalId);
    btn.addEventListener('click', () => modal.showModal());
});

document.querySelectorAll('.close-modal').forEach(btn => {
    const modal = btn.closest('dialog');
    btn.addEventListener('click', () => modal.close());
});

// Animate cards on page load (refresh)
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.card').forEach(card => {
        card.style.opacity = 0;
        setTimeout(() => card.style.opacity = 1, 100);
    });
});
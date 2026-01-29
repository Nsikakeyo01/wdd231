// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Modals
const modalButtons = document.querySelectorAll('.view-benefits');
const closeButtons = document.querySelectorAll('.close-modal');

modalButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetId = btn.dataset.target;
        const modal = document.getElementById(targetId);
        modal.showModal();
    });
});

closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('dialog').close();
    });
});

// Fill hidden timestamp
document.getElementById('timestamp').value = new Date().toISOString();

// Page refresh animation
document.body.style.opacity = 0;
window.addEventListener('load', () => {
    document.body.style.transition = 'opacity 1s ease-in';
    document.body.style.opacity = 1;
});
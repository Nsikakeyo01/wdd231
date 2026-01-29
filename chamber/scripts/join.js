// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Highlight current page
document.querySelectorAll('.nav-link').forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});

// Populate hidden timestamp
document.getElementById('timestamp').value = new Date().toISOString();

// Membership modals
const modalButtons = document.querySelectorAll('.view-benefits');
modalButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = document.getElementById(btn.dataset.modal);
        modal.showModal();
    });
});

// Close modals
const closeButtons = document.querySelectorAll('.close-modal');
closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('dialog').close();
    });
});

// Page refresh animation
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.card').forEach(card => {
        card.style.opacity = 0;
        setTimeout(() => {
            card.style.transition = 'opacity 0.8s ease-in-out, transform 0.8s ease-in-out';
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        }, 100);
    });
});
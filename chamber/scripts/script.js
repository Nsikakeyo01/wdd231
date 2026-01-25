// ==============================
// Timestamp
// ==============================
document.addEventListener('DOMContentLoaded', () => {
    const ts = document.getElementById('timestamp');
    if (ts) ts.value = new Date().toISOString();

    // ==============================
    // Modals
    // ==============================
    document.querySelectorAll('.open-modal').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const modal = document.querySelector(link.getAttribute('href'));
            if (modal) modal.style.display = 'block';
        });
    });

    document.querySelectorAll('.close').forEach(span => {
        span.addEventListener('click', () => {
            span.closest('.modal').style.display = 'none';
        });
    });

    window.addEventListener('click', e => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });

    // ==============================
    // Animate membership cards
    // ==============================
    const cards = document.querySelectorAll('.membership-cards .card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('animate');
        }, index * 200); // stagger animation
    });
});
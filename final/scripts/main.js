// main.js
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger?.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Dynamic Services
const servicesContainer = document.getElementById('services-container');

async function loadServices() {
    try {
        const res = await fetch('data/services.json');
        const services = await res.json();

        services.forEach(service => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <h2>${service.name}</h2>
                <p>${service.description}</p>
                <p>Price: ${service.price}</p>
                <button class="details-btn">Details</button>
            `;
            servicesContainer?.appendChild(card);

            // Modal functionality
            const modal = document.getElementById('modal');
            const modalDetails = document.getElementById('modal-details');
            const closeBtn = document.querySelector('.close-btn');

            card.querySelector('.details-btn').addEventListener('click', () => {
                modalDetails.innerHTML = `
                    <h2>${service.name}</h2>
                    <p>${service.description}</p>
                    <p>Features: ${service.features.join(', ')}</p>
                    <p>Price: ${service.price}</p>
                `;
                modal.style.display = 'flex';
                localStorage.setItem('lastViewedService', service.name);
            });

            closeBtn.addEventListener('click', () => {
                modal.style.display = 'none';
            });

            window.addEventListener('click', (e) => {
                if (e.target == modal) modal.style.display = 'none';
            });
        });

    } catch (err) {
        console.error('Failed to load services:', err);
    }
}

// Only run if services container exists (service.html)
if (servicesContainer) loadServices();

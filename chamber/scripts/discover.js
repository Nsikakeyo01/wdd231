// discover.js
const cardsContainer = document.getElementById('cards-container');
const lastVisit = document.getElementById('last-visit');

// Show last visit using localStorage
const now = new Date();
const last = localStorage.getItem('lastVisit');
if (last) {
    lastVisit.textContent = `Your last visit was on ${last}`;
} else {
    lastVisit.textContent = `Welcome to our Chamber Discover page!`;
}
localStorage.setItem('lastVisit', now.toLocaleString());

// Fetch JSON data and create cards
async function loadPlaces() {
    try {
        const response = await fetch('data/places.json');
        const places = await response.json();

        places.forEach(place => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <img src="${place.image}" alt="${place.title}" loading="lazy">
                <div class="card-content">
                    <h2>${place.title}</h2>
                    <p class="address">${place.address}</p>
                    <p>${place.description}</p>
                    <a href="${place.link}" class="learn-more">Learn More</a>
                </div>
            `;
            cardsContainer.appendChild(card);
        });
    } catch (error) {
        console.error('Error loading places:', error);
        cardsContainer.innerHTML = `<p>Unable to load places at this time.</p>`;
    }
}

loadPlaces();

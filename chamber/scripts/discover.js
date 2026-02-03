// scripts/discover.js
const cardsContainer = document.getElementById('cards-container');

// Display last visit using localStorage
const lastVisitElement = document.getElementById('last-visit');
const now = new Date();
const lastVisit = localStorage.getItem('lastVisit');

if (lastVisit) {
    lastVisitElement.textContent = `Welcome back! Your last visit was on ${lastVisit}.`;
} else {
    lastVisitElement.textContent = 'Welcome to our Chamber of Commerce!';
}

// Save current visit
localStorage.setItem('lastVisit', now.toDateString());

// Fetch JSON data and create cards
fetch('data/places.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(place => {
            // Create card element
            const card = document.createElement('div');
            card.className = 'card';
            card.id = place.id;

            // Image with lazy loading
            const img = document.createElement('img');
            img.src = place.image;
            img.alt = place.title;
            img.loading = 'lazy';

            // Card content container
            const cardContent = document.createElement('div');
            cardContent.className = 'card-content';

            const title = document.createElement('h2');
            title.textContent = place.title;

            const address = document.createElement('p');
            address.className = 'address';
            address.textContent = place.address;

            const description = document.createElement('p');
            description.className = 'description';
            description.textContent = place.description;

            const link = document.createElement('a');
            link.href = place.link;
            link.textContent = 'Learn More';
            link.className = 'learn-more';

            // Append elements to card
            cardContent.appendChild(title);
            cardContent.appendChild(address);
            cardContent.appendChild(description);
            cardContent.appendChild(link);

            card.appendChild(img);
            card.appendChild(cardContent);

            cardsContainer.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Error loading JSON data:', error);
        cardsContainer.textContent = 'Failed to load places. Please try again later.';
    });

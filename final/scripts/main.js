// main.js
// ES Module for Creative Hustle Hub project

// Local JSON file path (place your JSON in the final folder: data/hustles.json)
const DATA_URL = './data/hustles.json';

// DOM elements
const hustleContainer = document.querySelector('#hustle-container');
const modal = document.querySelector('#hustle-modal');
const modalContent = document.querySelector('#modal-content');
const modalClose = document.querySelector('#modal-close');

// Check localStorage for saved favorites
const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// Fetch JSON data and display items
async function loadHustles() {
    try {
        const response = await fetch(DATA_URL);
        if (!response.ok) throw new Error('Failed to fetch data');
        const hustles = await response.json();

        // Display first 15 hustles
        hustles.slice(0, 15).forEach(hustle => {
            const item = document.createElement('div');
            item.classList.add('hustle-item');

            // Template literal with 4 properties: title, type, price, description
            item.innerHTML = `
        <h3>${hustle.title}</h3>
        <p><strong>Type:</strong> ${hustle.type}</p>
        <p><strong>Price:</strong> ${hustle.price}</p>
        <button class="details-btn">View Details</button>
        <button class="fav-btn">${favorites.includes(hustle.id) ? '❤️' : '♡'}</button>
      `;

            // Add event listener for modal
            item.querySelector('.details-btn').addEventListener('click', () => {
                openModal(hustle);
            });

            // Add event listener for favorites
            item.querySelector('.fav-btn').addEventListener('click', () => {
                toggleFavorite(hustle.id, item.querySelector('.fav-btn'));
            });

            hustleContainer.appendChild(item);
        });
    } catch (error) {
        console.error('Error loading hustles:', error);
        hustleContainer.innerHTML = '<p>Failed to load hustles. Please try again later.</p>';
    }
}

// Open modal dialog
function openModal(hustle) {
    modalContent.innerHTML = `
    <h2>${hustle.title}</h2>
    <p><strong>Type:</strong> ${hustle.type}</p>
    <p><strong>Price:</strong> ${hustle.price}</p>
    <p><strong>Description:</strong> ${hustle.description}</p>
  `;
    modal.classList.add('open');
}

// Close modal dialog
modalClose.addEventListener('click', () => {
    modal.classList.remove('open');
});

// Close modal on outside click
modal.addEventListener('click', e => {
    if (e.target === modal) modal.classList.remove('open');
});

// Toggle favorites in localStorage
function toggleFavorite(id, btn) {
    if (favorites.includes(id)) {
        const index = favorites.indexOf(id);
        favorites.splice(index, 1);
        btn.textContent = '♡';
    } else {
        favorites.push(id);
        btn.textContent = '❤️';
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

// Initialize
loadHustles();

import { places } from "../data/discover.mjs";

const cards = document.querySelector("#cards");
const message = document.querySelector("#visit-message");

// LOCAL STORAGE MESSAGE
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
    message.textContent = "Welcome! This is your first visit.";
} else {
    const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
    message.textContent = `Welcome back! You last visited ${days} day(s) ago.`;
}

localStorage.setItem("lastVisit", now);

// BUILD CARDS
places.forEach((place, index) => {
    const card = document.createElement("section");
    card.classList.add("card");
    card.style.gridArea = [
        "one", "two", "three", "four",
        "five", "six", "seven", "eight"
    ][index];

    card.innerHTML = `
    <h2>${place.name}</h2>
    <p>${place.address}</p>
    <p>${place.description}</p>
    <img src="${place.image}" alt="${place.name}" loading="lazy">
    <button>Learn More</button>
  `;

    cards.appendChild(card);
});

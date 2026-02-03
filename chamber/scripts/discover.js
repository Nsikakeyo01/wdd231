// scripts/discover.js
document.addEventListener("DOMContentLoaded", () => {
    const cardsContainer = document.getElementById("cards-container");
    const lastVisitEl = document.getElementById("last-visit");

    // -----------------------------
    // 1. Local Storage: Last Visit
    // -----------------------------
    const now = new Date();
    const lastVisit = localStorage.getItem("lastVisit");

    if (lastVisit) {
        const lastDate = new Date(lastVisit);
        lastVisitEl.textContent = `Welcome back! Your last visit was on ${lastDate.toDateString()}.`;
    } else {
        lastVisitEl.textContent = "Welcome! This is your first visit.";
    }

    localStorage.setItem("lastVisit", now.toISOString());

    // -----------------------------
    // 2. Fetch JSON Data
    // -----------------------------
    fetch("data/places.json")
        .then((response) => response.json())
        .then((places) => {
            places.forEach((place) => {
                // Create card element
                const card = document.createElement("div");
                card.className = "card";
                card.id = place.id;

                // Card inner HTML
                card.innerHTML = `
                    <img src="${place.image}" alt="${place.title}" loading="lazy">
                    <div class="card-content">
                        <h3>${place.title}</h3>
                        <p class="address">${place.address}</p>
                        <p class="description">${place.description}</p>
                        <a href="${place.link}" class="learn-more">Learn More</a>
                    </div>
                `;

                // Append card to container
                cardsContainer.appendChild(card);
            });
        })
        .catch((error) => {
            console.error("Error loading places:", error);
            cardsContainer.textContent = "Sorry, we couldn't load the community places.";
        });
});

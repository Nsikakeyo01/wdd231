import { openModal } from "./modal.js";
import { saveFavorite } from "./storage.js";

async function loadServices() {
    try {
        const response = await fetch("data/services.json");
        const services = await response.json();
        const container = document.querySelector("#services-container");

        services.forEach(service => {
            const card = document.createElement("div");
            card.innerHTML = `
        <h2>${service.title}</h2>
        <p>${service.category}</p>
        <p>${service.price}</p>
        <button>View</button>
      `;
            card.querySelector("button").addEventListener("click", () => {
                openModal(service);
                saveFavorite(service.title);
            });
            container.appendChild(card);
        });
    } catch (error) {
        console.error(error);
    }
}

loadServices();

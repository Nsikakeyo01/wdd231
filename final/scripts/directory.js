import "./main.js";

const container = document.querySelector("#businessContainer");
const filter = document.querySelector("#categoryFilter");
const yearSpan = document.querySelector("#year");

yearSpan.textContent = new Date().getFullYear();

let businesses = [];

// Fetch Data
async function getBusinesses() {
    try {
        const response = await fetch("data/businesses.json");

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        businesses = data;

        displayBusinesses(businesses);

    } catch (error) {
        container.innerHTML = `<p>Error loading businesses.</p>`;
        console.error("Fetch error:", error);
    }
}

// Display Businesses
function displayBusinesses(list) {
    container.innerHTML = "";

    list.forEach(business => {
        const card = document.createElement("article");
        card.classList.add("business-card");

        card.innerHTML = `
            <img src="${business.image}" alt="${business.name} business image" loading="lazy">

            <h3>${business.name}</h3>
            <p><strong>Category:</strong> ${business.category}</p>
            <p><strong>Location:</strong> ${business.location}</p>
            <button class="details-btn" data-id="${business.id}">View Details</button>
            <button class="fav-btn" data-id="${business.id}">Save</button>
        `;

        container.appendChild(card);
    });

    attachEventListeners();
}


// Filter
filter.addEventListener("change", () => {
    const selected = filter.value;

    if (selected === "all") {
        displayBusinesses(businesses);
    } else {
        const filtered = businesses.filter(business =>
            business.category === selected
        );

        displayBusinesses(filtered);
    }
});

getBusinesses();
const modal = document.querySelector("#businessModal");
const modalDetails = document.querySelector("#modalDetails");
const closeModal = document.querySelector("#closeModal");

function attachEventListeners() {
    document.querySelectorAll(".details-btn").forEach(button => {
        button.addEventListener("click", (e) => {
            const id = parseInt(e.target.dataset.id);
            const business = businesses.find(b => b.id === id);

            modalDetails.innerHTML = `
                <h2>${business.name}</h2>
                <p><strong>Category:</strong> ${business.category}</p>
                <p><strong>Location:</strong> ${business.location}</p>
                <p><strong>Phone:</strong> ${business.phone}</p>
                <p>${business.description}</p>
            `;

            modal.classList.add("show");
        });
    });

    document.querySelectorAll(".fav-btn").forEach(button => {
        button.addEventListener("click", (e) => {
            const id = parseInt(e.target.dataset.id);
            saveFavorite(id);
            alert("Saved to favorites!");
        });
    });
}

closeModal.addEventListener("click", () => {
    modal.classList.remove("show");
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("show");
    }
});

function saveFavorite(id) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (!favorites.includes(id)) {
        favorites.push(id);
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }
}

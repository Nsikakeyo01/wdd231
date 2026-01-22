const spotlightsContainer = document.getElementById("spotlight-container");

async function fetchSpotlights() {
    try {
        const response = await fetch("data/members.json");
        const members = await response.json();

        const goldSilver = members.filter(member =>
            member.membership.toLowerCase() === "gold" ||
            member.membership.toLowerCase() === "silver"
        );

        const selected = [];
        while (selected.length < 3 && goldSilver.length > 0) {
            const randomIndex = Math.floor(Math.random() * goldSilver.length);
            selected.push(goldSilver.splice(randomIndex, 1)[0]);
        }

        selected.forEach(member => {
            const card = document.createElement("div");
            card.classList.add("spotlight-card");
            card.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <p><a href="${member.website}" target="_blank">${member.website}</a></p>
                <p>Membership: ${member.membership}</p>
            `;
            spotlightsContainer.appendChild(card);
        });

    } catch (error) {
        console.error("Spotlights fetch failed:", error);
    }
}

fetchSpotlights();

const spotlightsContainer = document.getElementById("spotlights-container");

async function fetchSpotlights() {
    try {
        const response = await fetch("scripts/members.json"); // your JSON file with members
        const members = await response.json();

        // Filter gold or silver members
        const goldSilver = members.filter(member => member.membership.toLowerCase() === "gold" || member.membership.toLowerCase() === "silver");

        // Randomly select 2-3 members
        const selected = [];
        while (selected.length < 3 && goldSilver.length > 0) {
            const randomIndex = Math.floor(Math.random() * goldSilver.length);
            selected.push(goldSilver.splice(randomIndex, 1)[0]);
        }

        // Render spotlight cards
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

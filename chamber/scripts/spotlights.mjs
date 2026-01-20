// spotlights.mjs
const spotlightContainer = document.getElementById("spotlight-cards");

async function loadSpotlights() {
    try {
        const response = await fetch("data/members.json");
        const members = await response.json();

        // Filter gold/silver members
        const filtered = members.filter(m => m.membership === "Gold" || m.membership === "Silver");

        // Randomly select 2-3 members
        const shuffled = filtered.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 3);

        // Render spotlight cards
        spotlightContainer.innerHTML = "";
        selected.forEach(member => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
        <img src="${member.logo}" alt="${member.company} logo">
        <h3>${member.company}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <p><a href="${member.website}" target="_blank">${member.website}</a></p>
        <p>Membership: ${member.membership}</p>
      `;
            spotlightContainer.appendChild(card);
        });
    } catch (error) {
        console.error(error);
    }
}

loadSpotlights();

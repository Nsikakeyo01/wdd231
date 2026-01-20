import members from '../data/members.json' assert { type: 'json' };

const container = document.getElementById("spotlight-container");

// Filter only gold/silver members
const eligible = members.filter(m => m.membership === "Gold" || m.membership === "Silver");

// Shuffle and pick 2–3
function getRandomMembers(arr, n) {
    return arr.sort(() => 0.5 - Math.random()).slice(0, n);
}

const selected = getRandomMembers(eligible, 3);

container.innerHTML = "";

selected.forEach(member => {
    const div = document.createElement("div");
    div.className = "spotlight";
    div.innerHTML = `
        <h3>${member.name}</h3>
        <p>${member.description}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
    `;
    container.appendChild(div);
});

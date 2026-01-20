// spotlights.mjs
import members from '../data/members.json' assert { type: 'json' };

const spotlightsSection = document.getElementById('spotlights');

// Filter for members with "Gold" or "Silver" membership (example)
const spotlightMembers = members.filter(member =>
    member.membership.toLowerCase() === 'gold' || member.membership.toLowerCase() === 'silver'
);

// Display up to 3 spotlights
spotlightMembers.slice(0, 3).forEach(member => {
    const spotlight = document.createElement('div');
    spotlight.classList.add('spotlight');

    spotlight.innerHTML = `
        <img src="images/${member.image}" alt="${member.name}">
        <h3>${member.name}</h3>
        <p>${member.business}</p>
        <p>${member.membership} Member</p>
    `;

    spotlightsSection.appendChild(spotlight);
});

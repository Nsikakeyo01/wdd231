// Fetch and display members
async function loadMembers() {
    const response = await fetch('data/members.json');
    const members = await response.json();
    const container = document.getElementById('members-container');

    members.forEach(member => {
        const card = document.createElement('div');
        card.className = 'member-card';
        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <h2>${member.name}</h2>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
            <p><strong>Membership:</strong> ${member.level}</p>
        `;
        container.appendChild(card);
    });
}

// Toggle views
document.getElementById('grid-view').addEventListener('click', () => {
    document.getElementById('members-container').classList.add('grid');
    document.getElementById('members-container').classList.remove('list');
});

document.getElementById('list-view').addEventListener('click', () => {
    document.getElementById('members-container').classList.add('list');
    document.getElementById('members-container').classList.remove('grid');
});

// Dynamic footer dates
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Load members on page load
loadMembers();

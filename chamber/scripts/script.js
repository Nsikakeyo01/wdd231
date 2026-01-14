// Async function to load member data
async function loadMembers() {
    try {
        const response = await fetch('data/members.json');
        const members = await response.json();

        const container = document.getElementById('members-container');
        container.innerHTML = '';

        members.forEach(member => {
            const card = document.createElement('div');
            card.classList.add('member-card');
            card.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Website</a>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        console.error('Error loading members:', error);
    }
}

// Grid/List toggle
document.getElementById('grid-view').addEventListener('click', () => {
    const container = document.getElementById('members-container');
    container.classList.add('grid');
    container.classList.remove('list');
});

document.getElementById('list-view').addEventListener('click', () => {
    const container = document.getElementById('members-container');
    container.classList.add('list');
    container.classList.remove('grid');
});

// Footer dynamic year and last modified
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Load members on page load
loadMembers();

// Script for fetching members and toggling view

document.addEventListener('DOMContentLoaded', async () => {
    const membersContainer = document.getElementById('members-container');
    const gridBtn = document.getElementById('grid-view');
    const listBtn = document.getElementById('list-view');

    // Fetch JSON data
    const response = await fetch('data/members.json');
    const members = await response.json();

    // Display members
    members.forEach(member => {
        const card = document.createElement('div');
        card.className = 'member-card';
        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <h2>${member.name}</h2>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p><a href="${member.website}" target="_blank">${member.website}</a></p>
            <p>Membership Level: ${member.membership}</p>
        `;
        membersContainer.appendChild(card);
    });

    // Grid/List toggle
    gridBtn.addEventListener('click', () => {
        membersContainer.classList.add('grid');
        membersContainer.classList.remove('list');
    });

    listBtn.addEventListener('click', () => {
        membersContainer.classList.add('list');
        membersContainer.classList.remove('grid');
    });

    // Footer copyright & last modified
    document.getElementById('copyright-year').textContent = new Date().getFullYear();
    document.getElementById('last-modified').textContent = document.lastModified;
});

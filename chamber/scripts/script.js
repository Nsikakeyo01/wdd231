const membersContainer = document.getElementById('members-container');
const gridBtn = document.getElementById('grid');
const listBtn = document.getElementById('list');

// Load members from JSON
fetch('data/members.json')
    .then(response => response.json())
    .then(data => displayMembers(data.members));

function displayMembers(members) {
    membersContainer.innerHTML = '';
    members.forEach(member => {
        const card = document.createElement('div');
        card.className = 'member-card';
        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <h2>${member.name}</h2>
            <p>Address: ${member.address}</p>
            <p>Phone: ${member.phone}</p>
            <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
            <p>Membership Level: ${member.level}</p>
        `;
        membersContainer.appendChild(card);
    });
}

// Toggle Grid/List
gridBtn.addEventListener('click', () => {
    membersContainer.classList.add('grid');
    membersContainer.classList.remove('list');
});

listBtn.addEventListener('click', () => {
    membersContainer.classList.add('list');
    membersContainer.classList.remove('grid');
});

// Footer dynamic info
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

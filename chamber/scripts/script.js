// Get references
const membersContainer = document.getElementById("members-container");
const gridBtn = document.getElementById("grid");
const listBtn = document.getElementById("list");

// Set current year and last modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Fetch members
async function displayMembers() {
    const response = await fetch("data/members.json");
    const data = await response.json();
    membersContainer.innerHTML = "";

    data.members.forEach(member => {
        const memberCard = document.createElement("div");
        memberCard.classList.add("member-card");

        memberCard.innerHTML = `
            <img src="images/${member.image}" alt="${member.name} Logo">
            <h2>${member.name}</h2>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p><a href="${member.website}" target="_blank">${member.website}</a></p>
            <p>Membership Level: ${member.level}</p>
        `;
        membersContainer.appendChild(memberCard);
    });
}

// Toggle grid/list view
gridBtn.addEventListener("click", () => {
    membersContainer.classList.add("grid");
    membersContainer.classList.remove("list");
});

listBtn.addEventListener("click", () => {
    membersContainer.classList.add("list");
    membersContainer.classList.remove("grid");
});

// Initialize
displayMembers();

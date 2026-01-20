async function loadSpotlights() {
  try {
    const response = await fetch('data/members.json');
    if (!response.ok) throw new Error('Failed to load members');
    const members = await response.json();

    // Filter gold and silver members
    const premiumMembers = members.filter(m => m.membership === 'gold' || m.membership === 'silver');

    // Randomly pick 2–3 members
    const shuffled = premiumMembers.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    const container = document.getElementById('spotlight-cards');
    container.innerHTML = '';

    selected.forEach(member => {
      const card = document.createElement('div');
      card.classList.add('spotlight-card');
      card.innerHTML = `
        <h3>${member.name}</h3>
        <img src="images/${member.logo}" alt="${member.name} logo">
        <p>Phone: ${member.phone}</p>
        <p>Address: ${member.address}</p>
        <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
        <p>Membership: ${member.membership}</p>
      `;
      container.appendChild(card);
    });
  } catch (error) {
    console.error(error);
  }
}

loadSpotlights();

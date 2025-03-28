// directory.js
async function fetchMemberData() {
    const response = await fetch('data/members.json');
    const members = await response.json();
    const memberDirectory = document.getElementById('member-directory');
    memberDirectory.innerHTML = ''; // Clear existing content
  
    members.forEach(member => {
      const card = document.createElement('div');
      card.classList.add('member-card');
      card.innerHTML = `
        <img src="images/${member.image}" alt="${member.name}">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}">Visit Website</a>
      `;
      memberDirectory.appendChild(card);
    });
  }
  
  fetchMemberData();
  
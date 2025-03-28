document.addEventListener('DOMContentLoaded', () => {
    // Set current year and last modified date
    document.getElementById('current-year').textContent = new Date().getFullYear();
    document.getElementById('last-modified-date').textContent = document.lastModified;

    // Fetch member data from members.json
    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            displayMembers(data);
        })
        .catch(error => console.error('Error loading member data:', error));

    // Toggle between grid and list views
    function toggleView(view) {
        const directory = document.getElementById('directory');
        directory.className = view === 'grid' ? 'grid-view' : 'list-view';
    }

    // Display members in grid/list view
    function displayMembers(members) {
        const directory = document.getElementById('directory');
        directory.innerHTML = ''; // Clear the directory

        members.forEach(member => {
            const card = document.createElement('div');
            card.classList.add('member-card');
            
            // Set image, business name, and contact info
            card.innerHTML = `
                <img src="images/${member.image}" alt="${member.business_name} logo">
                <h3>${member.business_name}</h3>
                <p>${member.address}</p>
                <p>${member.phone_number}</p>
                <p><a href="${member.website_url}" target="_blank">Visit Website</a></p>
                <p>Membership Level: ${member.membership_level === 1 ? 'Basic' : member.membership_level === 2 ? 'Silver' : 'Gold'}</p>
            `;
            directory.appendChild(card);
        });
    }
});

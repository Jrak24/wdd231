document.addEventListener("DOMContentLoaded", () => {
    const membersContainer = document.getElementById("members");
    const toggleViewButton = document.getElementById("toggleView");

    // Fetch JSON data
    fetch("data/members.json")
        .then(response => response.json())
        .then(data => {
            displayMembers(data);
        })
        .catch(error => console.error("Error fetching members:", error));

    function displayMembers(members) {
        membersContainer.innerHTML = "";
        members.forEach(member => {
            const card = document.createElement("div");
            card.classList.add("member-card");

            card.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            `;
            membersContainer.appendChild(card);
        });
    }

    // Toggle View Mode
    toggleViewButton.addEventListener("click", () => {
        membersContainer.classList.toggle("list-view");
        membersContainer.classList.toggle("grid-view");
    });
});

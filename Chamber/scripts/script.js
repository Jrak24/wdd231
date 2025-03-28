document.addEventListener("DOMContentLoaded", function () {
    // ✅ Update the footer with the current year
    document.getElementById("year").textContent = new Date().getFullYear();

    // ✅ Update the last modified date in the footer
    document.getElementById("lastModified").textContent = document.lastModified;

    // ✅ Load and display featured businesses in the "Business Spotlight" section
    fetch("data/members.json")
        .then(response => response.json())
        .then(data => {
            displaySpotlight(data);
        })
        .catch(error => console.error("Error loading business data:", error));

    function displaySpotlight(members) {
        const spotlightContainer = document.getElementById("spotlight-container");
        spotlightContainer.innerHTML = "";

        // Filter businesses with "gold" or "silver" membership levels
        const spotlightBusinesses = members.filter(member => member.membershipLevel >= 2);

        // Pick 2 random businesses
        const selectedBusinesses = getRandomItems(spotlightBusinesses, 2);

        selectedBusinesses.forEach(business => {
            let card = document.createElement("div");
            card.classList.add("spotlight-card");

            card.innerHTML = `
                <img src="images/${business.image}" alt="${business.name}">
                <h3>${business.name}</h3>
                <p>${business.address}</p>
                <a href="${business.website}" target="_blank">Visit Website</a>
            `;
            spotlightContainer.appendChild(card);
        });
    }

    function getRandomItems(array, num) {
        let shuffled = array.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    }
});

// JavaScript for footer date
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Fetch weather data from OpenWeatherMap API
async function fetchWeather() {
    const apiKey = 'e81d8efd5b7e7cf775b57a6c52944183'; // Replace with your OpenWeatherMap API key
    const city = 'Timbuktu'; // Replace with the actual city of the Chamber
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const temperature = data.main.temp;
        const description = data.weather[0].description;

        // Display weather data
        document.getElementById('weather-data').innerHTML = `
            <p>Temperature: ${temperature}°F</p>
            <p>Condition: ${description}</p>
        `;
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

// Fetch Spotlight business members
async function loadSpotlights() {
    const response = await fetch('path/to/your/json/data.json'); // Replace with actual path to your JSON data
    const data = await response.json();
    const spotlights = data.filter(member => member.membershipLevel === 'gold' || member.membershipLevel === 'silver');

    const spotlightContainer = document.getElementById('spotlight-container');
    spotlightContainer.innerHTML = '';

    // Randomly select 2 or 3 businesses to spotlight
    const randomSpotlights = [];
    while (randomSpotlights.length < 2) { // 2 or 3 members
        const randomIndex = Math.floor(Math.random() * spotlights.length);
        if (!randomSpotlights.includes(spotlights[randomIndex])) {
            randomSpotlights.push(spotlights[randomIndex]);
        }
    }

    // Display the spotlights
    randomSpotlights.forEach(member => {
        const spotlightCard = `
            <div class="spotlight-card">
                <img src="${member.logo}" alt="${member.companyName}">
                <h3>${member.companyName}</h3>
                <p>Phone: ${member.phone}</p>
                <p>Address: ${member.address}</p>
                <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
                <p>Membership Level: ${member.membershipLevel}</p>
            </div>
        `;
        spotlightContainer.innerHTML += spotlightCard;
    });
}

// Call the functions
fetchWeather();
loadSpotlights();

// OpenWeatherMap API
const apiKey = "YOUR_API_KEY"; // Replace with your API key
const city = "New York"; // Change to your chamber city
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

// Fetch Weather Data
fetch(weatherUrl)
    .then(response => response.json())
    .then(data => {
        const temp = Math.round(data.main.temp);
        const weather = data.weather.map(w => w.description).join(", ");
        document.getElementById("temperature").textContent = `Temperature: ${temp}°C`;
        document.getElementById("weather-description").textContent = `Condition: ${weather}`;
    })
    .catch(error => console.error("Weather API Error:", error));

// Fetch 3-Day Forecast
fetch(forecastUrl)
    .then(response => response.json())
    .then(data => {
        let forecastText = "3-Day Forecast: ";
        for (let i = 0; i < 3; i++) {
            let temp = Math.round(data.list[i * 8].main.temp);
            forecastText += `${temp}°C | `;
        }
        document.getElementById("forecast").textContent = forecastText;
    })
    .catch(error => console.error("Forecast API Error:", error));

// Chamber Member Spotlights
const members = [
    { name: "ABC Corp", logo: "abc-logo.png", phone: "123-456-7890", address: "123 Main St", website: "https://abc.com", level: "Gold" },
    { name: "XYZ Ltd", logo: "xyz-logo.png", phone: "987-654-3210", address: "456 Elm St", website: "https://xyz.com", level: "Silver" },
    { name: "Mega Business", logo: "mega-logo.png", phone: "555-123-4567", address: "789 Oak St", website: "https://mega.com", level: "Gold" }
];

// Filter Gold and Silver Members
const eligibleMembers = members.filter(member => member.level === "Gold" || member.level === "Silver");

// Randomly Select 2 Members
const shuffled = eligibleMembers.sort(() => 0.5 - Math.random());
const selectedMembers = shuffled.slice(0, 2);

// Display Spotlights
const spotlightContainer = document.getElementById("spotlight-container");
selectedMembers.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("spotlight-card");
    card.innerHTML = `
        <img src="${member.logo}" alt="${member.name}">
        <h3>${member.name}</h3>
        <p>📞 ${member.phone}</p>
        <p>📍 ${member.address}</p>
        <p><a href="${member.website}" target="_blank">Visit Website</a></p>
        <p><strong>Membership:</strong> ${member.level}</p>
    `;
    spotlightContainer.appendChild(card);
});

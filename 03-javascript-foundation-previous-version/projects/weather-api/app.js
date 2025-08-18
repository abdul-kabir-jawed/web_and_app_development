// Get reference to the search input element
const search = document.getElementById("search");

// Function to validate input and initiate weather fetch
function checkCity() {
    const cityName = search.value; // Get current input value
    
    if (cityName.trim() !== "" && cityName.trim().length !== 1) {
        weatherFetch(cityName); // Fetch weather data for valid city
        search.value = ""; 
    } else {
        search.value = "";
        console.log("Write Proper City Name"); 
    }
}

// Main function to fetch weather data using OpenWeatherMap API
async function weatherFetch(city) {
    try {
        // Step 1: Get coordinates for the city using Geocoding API
        let data = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid={APP API}`);
        data = await data.json();

        // Check if city was found
        if (data.length === 0) {
            throw new Error("City not found");
        }

        // Extract latitude and longitude from first result
        const [a, ...rest] = data;
        const { lat, lon } = a;

        // Step 2: Get weather forecast using coordinates
        let result = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid={APP API}`);
        result = await result.json();
        
        // Get current temperature and convert from Kelvin to Celsius
        result = result.list[0].main.temp;
        result = Math.round(result - 273.15);

        // Change background based on temperature ranges
        const container = document.getElementById("container");
        if (result >= 26) {
            // Hot weather background
            container.style.backgroundImage = "url('assets/istockphoto-153046859-612x612.jpg')";
        }
        else if (result >= 16 && result <= 25) {
            // Mild weather background
            container.style.backgroundImage = "url('assets/motion-array-1341773-nSYGYsh4Ev-high_0009.avif')";
        }
        if (result <= 15) {
            // Cold weather background
            container.style.backgroundImage = "url('assets/HD-wallpaper-snow-covered-pine-trees-with-reflection-on-river-and-yellow-black-cloudy-sky-nature.jpg')";
        }

        // Display weather information in the data tab
        document.getElementById("data-tab").innerHTML = `<footer id="footer">
             <div id="data">
                <h1 id="temperature">${result}°C</h1>
                <h1 id="city-name">${city}</h1>
            </div>
            </footer>`;
            
    } catch (error) {
        console.log("Invalid City Name or API Error");
    }
}

// Event listener for Enter key press in search input
search.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        checkCity();
    }
});

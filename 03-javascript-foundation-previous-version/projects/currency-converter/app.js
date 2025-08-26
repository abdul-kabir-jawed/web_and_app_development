// API Configuration
const API_KEY = '';

// Initialize result display
document.getElementById("result").style.display = "none";

/**
 * Main function to convert currency based on user input
 */
async function convertCurrency() {
    // Get and validate amount input
    const enterAmount = parseFloat(document.getElementById("enter_amount").value);
    let error = document.getElementsByClassName("error-message")[0];

    // Validate amount
    if (isNaN(enterAmount) || enterAmount <= 0) {
        if (error) {
            error.innerHTML = `<p>Enter a correct number, must be greater than 0.</p>`;
            error.style.display = "block";
            setTimeout(() => {
                error.style.display = "none";
            }, 5000);
        }
        return false;
    }

    // Get currency selections
    const fromCurrency = document.getElementById("from_currency").value;
    const toCurrency = document.getElementById("to_currency").value;

    // Validate currency selections
    if (!fromCurrency || !toCurrency) {
        error.innerHTML = `<p>Please select both currencies</p>`;
        error.style.display = "block";
        setTimeout(() => {
            error.style.display = "none";
        }, 5000);
        return false;
    }

    // Check for same currency selection
    if (fromCurrency === toCurrency) {
        error.innerHTML = `<p>Please select different currencies</p>`;
        error.style.display = "block";
        setTimeout(() => {
            error.style.display = "none";
        }, 5000);
        return false;
    }

    // Fetch conversion rate and calculate
    try {
        let data = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency}`);
        data = await data.json();
        data = data.conversion_rates[toCurrency];
        const convertedAmount = data * enterAmount;
        
        // Display results
        const result = document.getElementById("result-amount");
        const resultRate = document.getElementById("result-rate");
        result.innerHTML = `${convertedAmount} ${toCurrency}`;
        resultRate.innerHTML = `1 ${fromCurrency} = ${data} ${toCurrency}`;
        document.getElementById("result").style.display = "block";
    }
    catch (error) {
        console.error(`Error occured while fetching api because ${error}`);
    }
}


async function optionsUpdate() {
    try {
        let data = await fetch("https://v6.exchangerate-api.com/v6/aae2e282b70a65e703321a32/latest/USD");
        data = await data.json();
        const totalKeys = Object.keys(data.conversion_rates);
        const options = document.getElementsByClassName("currency-dropdown");
        
        // Populate both dropdown menus
        for (let i = 0; i < totalKeys.length; i++) {
            options[0].innerHTML += `<option value="${totalKeys[i]}">${totalKeys[i]}</option>`;
            options[1].innerHTML += `<option value="${totalKeys[i]}">${totalKeys[i]}</option>`;
        }
        
        // Hide error message
        let error = document.getElementsByClassName("error-message")[0];
        if (error) {
            error.style.display = "none";
        }
    }
    catch (error) {
        console.error(`Error occurred while fetching api because ${error}`);
    }
}

// Initialize currency options on page load
optionsUpdate();

// Event listener for Enter key press
document.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        convertCurrency();
    }
});

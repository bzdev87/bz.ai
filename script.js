
function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById("datetime").innerText = now.toLocaleDateString('id-ID', options);
}

async function fetchWeather() {
    try {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=-6.2&longitude=106.8&current_weather=true');
        const data = await response.json();
        document.getElementById("weather").innerText = `Cuaca: ${data.current_weather.temperature}°C, ${data.current_weather.weathercode}`;
    } catch (error) {
        document.getElementById("weather").innerText = "Cuaca tidak tersedia";
    }
}

setInterval(updateDateTime, 1000);
updateDateTime();
fetchWeather();

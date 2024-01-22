document.addEventListener("DOMContentLoaded", () => {
    // Fetch recent earthquake data from USGS API
    fetch("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson")
        .then(response => response.json())
        .then(data => {
            // Get the most recent earthquake
            const mostRecentEarthquake = data.features[0];
            
            // Display earthquake information
            const quakeInfoElement = document.getElementById("quakeInfo");
            quakeInfoElement.innerHTML = `<p>Location: ${mostRecentEarthquake.properties.place}</p>
                                          <p>Magnitude: ${mostRecentEarthquake.properties.mag}</p>
                                          <p>Time: ${new Date(mostRecentEarthquake.properties.time).toLocaleString()}</p>
                                          <p>Coordinates: ${mostRecentEarthquake.geometry.coordinates.join(', ')}</p>`;
        })
        .catch(error => {
            console.error("Error fetching earthquake data:", error);
            document.getElementById("quakeInfo").innerHTML = "Error fetching earthquake data.";
        });
});

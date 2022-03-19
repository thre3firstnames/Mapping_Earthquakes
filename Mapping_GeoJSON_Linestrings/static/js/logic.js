// Add console.log to check to see if our code is working.
console.log("Systems Operational");

// We create the tile layer that will be the background of our map.

let night = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    // id: "streets-v11",
    // id: "light-v10",
    id: "navigation-night-v1",
    // id: "outdoors-v11",
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let day = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    // id: "dark-v10",
    id: "navigation-day-v1",
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
    "Day Navigation": day,
    "Night Navigation": night
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [44.0, -80.0],
    zoom: 2,
    layers: [night]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);


// Accessing the airport GeoJSON URL
let torontoData = "https://raw.githubusercontent.com/thre3firstnames/Mapping_Earthquakes/main/torontoRoutes.json";

// Grabbing our GeoJSON data.
// d3.json(torontoData).then(function(data) {
//     console.log(data);
//     // Creating a GeoJSON layer with the retrieved data.
//     L.geoJSON(data).addTo(map)
// });

// /////SKILL DRILL 13.5.5 B - adding styling and labels
// Create a style for the lines.
let myStyle = {
    color: "#ffffa1",
    weight: 2
}

d3.json(torontoData).then(function(data) {
    console.log("DATA", data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data,{ 
    //   color: "lightyellow",
    //   weight: 2,
    style: myStyle,
        onEachFeature: function(feature, layer) {
            console.log("LAYER" , layer);
            layer.bindPopup("<h3>Airline: "+ feature.properties.airline +"</h2><hr><h4>Destination: " + feature.properties.dst + "</h4>")}}
            ).addTo(map)
    });






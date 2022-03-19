// Add console.log to check to see if our code is working.
console.log("Systems Operational");

// We create the tile layer that will be the background of our map.

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "streets-v11",
    // id: "light-v10",
    // id: "navigation-night-v1",
    // id: "outdoors-v11",
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let satStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    // id: "dark-v10",
    // id: "navigation-day-v1",
    id: "satellite-streets-v11",
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
    Streets: streets,
    Satellite: satStreets
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [39.5, -98.5],
    zoom: 3,
    layers: [streets]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);


// // Accessing the airport GeoJSON URL
// let torontoHoods = "https://raw.githubusercontent.com/thre3firstnames/Mapping_Earthquakes/main/torontoNeighborhoods.json";

// Retrieve the earthquake GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data).addTo(map);
});

// // /////SKILL DRILL 13.5.6 A - adding styling and labels
// // Create a style for the lines.
// let myStyle = {
//     color: "blue",
//     weight: 2,
//     fillColor: "yellow"
// }

// d3.json(torontoHoods).then(function(data) {
//     console.log("DATA", data);
//   // Creating a GeoJSON layer with the retrieved data.
//   L.geoJSON(data,{ 
//     style: myStyle,
//         onEachFeature: function(feature, layer) {
//             console.log("LAYER" , layer);
//             layer.bindPopup("<h3>Neighborhood: "+ feature.properties.AREA_NAME +"</h2>")}}
//             ).addTo(map)
//     });






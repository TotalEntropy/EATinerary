// Icons for the map
const cutlery = L.icon({
  iconUrl: 'static/Images/cutlery.svg',
  iconSize: [45, 95],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
});

// Function to populate the map with markers
var createMap = (data) => {

  // Separate the map data and catagories
  var map_data = data.map_data;
  var map_categories = data.map_categories;
  console.log(map_data);
  console.log(map_categories);

  // Create empty array to later store the markers 
  var markers = [];

  // Push the markers to the marker arrays
  map_data.forEach(row => {

    // Construct the marker data
    var marker = [
             row.Latitude,
             row.Longitude,
             {icon: cutlery}
             ];

    // Construct the popup data
    var popup = '<b>Name: </b>' + row.Name + '<br>'
                + '<b>Address: </b>' + row.Address + '<br>'
                + '<b>Stars: </b>' + row.Stars + '<br>';

    // Bind the marker and popup data
    markers.push(L.marker(marker).bindPopup(popup));
  });

  // Create layer group of the markers
  var restaurants = L.layerGroup(markers);

  // Create tile layers
  var day = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: mapboxApiKey
  });

  // Only one base layer can be shown at a time
  var baseMaps = {
    Day: day
  };

  // Overlay maps that can be toggled on or off
  var overlayMaps = {
    All: restaurants
  };

  // Create map object and set defaults
  var myMap = L.map('map', {
    center: [43.7179997, -79.4178587],
    zoom: 12,
    layers: [day, restaurants]
  });

  // Create control layer for our map
  L.control.layers(baseMaps, overlayMaps).addTo(myMap);
};
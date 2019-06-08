// Cutlery Icon
var cutlery = L.icon({
	iconUrl: 'static/Images/cutlery.svg',
	iconSize:     [45, 95],
    iconAnchor:   [22, 94],
    popupAnchor:  [-3, -76]
});

// Vegan and Vegetarian Icon
var vegan = L.icon({
	iconUrl: 'static/Images/vegan.png',
	iconSize:     [38, 95],
    iconAnchor:   [22, 94],
    popupAnchor:  [-3, -76]
});

// Chinese Icon
var Chinese = L.icon({
	iconUrl: 'static/Images/Chinese.svg',
	iconSize:     [38, 95],
    iconAnchor:   [22, 94],
    popupAnchor:  [-3, -76]
});

// Japanese Icon
var Japanese = L.icon({
	iconUrl: 'static/Images/Japanese.svg',
	iconSize:     [38, 95],
    iconAnchor:   [22, 94],
    popupAnchor:  [-3, -76]
});

// Canadian Icon (Poutineries)
var Canadian = L.icon({
	iconUrl: 'static/Images/Canada.svg',
	iconSize:     [38, 95],
    iconAnchor:   [22, 94],
    popupAnchor:  [-3, -76]
});

// American Icon (burgers, fastfood, Hot Dogs, Sandwiches) 
var American = L.icon({
	iconUrl: 'static/Images/USA.svg',
	iconSize:     [38, 95],
    iconAnchor:   [22, 94],
    popupAnchor:  [-3, -76]
});

// Korean Icon
var Korean = L.icon({
	iconUrl: 'static/Images/Korean.svg',
	iconSize:     [38, 95],
    iconAnchor:   [22, 94],
    popupAnchor:  [-3, -76]
});

// Mexican Icon
var Mexican = L.icon({
	iconUrl: 'static/Images/Mexican.svg',
	iconSize:     [38, 95],
    iconAnchor:   [22, 94],
    popupAnchor:  [-3, -76]
});

// Italian Icon
var Italian = L.icon({
	iconUrl: 'static/Images/Italian.svg',
	iconSize:     [38, 95],
    iconAnchor:   [22, 94],
    popupAnchor:  [-3, -76]
});

// Filipino Icon
var Filipino = L.icon({
	iconUrl: 'static/Images/Filipino.svg',
	iconSize:     [38, 95],
    iconAnchor:   [22, 94],
    popupAnchor:  [-3, -76]
});

// Greek
var Greek = L.icon({
	iconUrl: 'static/Images/Greek.svg',
	iconSize:     [38, 95],
    iconAnchor:   [22, 94],
    popupAnchor:  [-3, -76]
});

// Cafes Icon (bubble tea, coffee, tea, cafes
var cafe = L.icon({
	iconUrl: 'static/Images/cafe.svg',
	iconSize:     [38, 95],
    iconAnchor:   [22, 94],
    popupAnchor:  [-3, -76]
});

// Sports Bars
var sportsbar = L.icon({
	iconUrl: 'static/Images/Raptors.png',
	iconSize:     [28, 45],
    iconAnchor:   [22, 94],
    popupAnchor:  [-3, -76]
});

// Dance
var dance = L.icon({
	iconUrl: 'static/Images/dance.svg',
	iconSize:     [28, 45],
    iconAnchor:   [22, 94],
    popupAnchor:  [-3, -76]
});

// An array which will be used to store created restaurantMarkers
var restaurantMarkers = [];

console.log(data);

for (var i = 0; i < data.length; i++) {
  // loop through the data, create a new marker, push it to the restaurantMarkers array
  restaurantMarkers.push(
    L.marker([(data[i].Latitude), (data[i].Longitude)],{icon: cutlery}).bindPopup("<h2>" + data[i].Name + "</h2>" + "<h3>" + data[i].Address + "</h3>" + "<h3>" + data[i]["Postal code"] + "</h3>")
  );
}

// Add all the restaurantMarkers to a new layer group.
// Now we can handle them as one group instead of referencing each individually
var restaurants = L.layerGroup(restaurantMarkers);

// Define variables for our tile layers
// TODO set regular streets layer

var dark = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.dark",
  accessToken: API_KEY
});

var satellite = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.satellite",
  accessToken: API_KEY
});

var pirates = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.pirates",
  accessToken: API_KEY
});

// Only one base layer can be shown at a time
var baseMaps = {
  // TODO regular
  Night: dark,
  Satellite: satellite,
  Fun: pirates
};

// Overlays that may be toggled on or off
var overlayMaps = {
  Restaurants: restaurants
};

// Create map object and set default layers
var myMap = L.map("map", {
  center: [43.7179997, -79.42919975],
  zoom: 8,
  layers: [satellite, restaurants] // TODO set streets as default
});

// Pass our map layers into our layer control
// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps).addTo(myMap);
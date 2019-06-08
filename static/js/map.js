// Cutlery Icon
var cutlery = L.icon({
	iconUrl: 'static/Images/cutlery.svg',
	iconSize:     [45, 95],
    iconAnchor:   [22, 94],
    popupAnchor:  [-3, -76]
});

// Gluten-Free Icon
var glutenFree = L.icon({
	iconUrl: 'static/Images/gf.png',
	iconSize:     [25, 45],
    iconAnchor:   [22, 94],
    popupAnchor:  [-3, -76]
});

// Vegan Icon
var vegan = L.icon({
	iconUrl: 'static/Images/vegan.png',
	iconSize:     [38, 95],
    iconAnchor:   [22, 94],
    popupAnchor:  [-3, -76]
});

// Chinese Icon
var chinese = L.icon({
	iconUrl: 'static/Images/Chinese.svg',
	iconSize:     [38, 95],
    iconAnchor:   [22, 94],
    popupAnchor:  [-3, -76]
});

// Japanese Icon
var japanese = L.icon({
	iconUrl: 'static/Images/Japanese.svg',
	iconSize:     [38, 95],
    iconAnchor:   [22, 94],
    popupAnchor:  [-3, -76]
});

// Canadian Icon (Poutineries)
var canadian = L.icon({
	iconUrl: 'static/Images/Canada.svg',
	iconSize:     [38, 95],
    iconAnchor:   [22, 94],
    popupAnchor:  [-3, -76]
});

// American Icon (burgers, fastfood, Hot Dogs, Sandwiches) 
var american = L.icon({
	iconUrl: 'static/Images/USA.svg',
	iconSize:     [38, 95],
    iconAnchor:   [22, 94],
    popupAnchor:  [-3, -76]
});

// Korean Icon
var korean = L.icon({
	iconUrl: 'static/Images/Korean.svg',
	iconSize:     [38, 95],
    iconAnchor:   [22, 94],
    popupAnchor:  [-3, -76]
});

// Mexican Icon
var mexican = L.icon({
	iconUrl: 'static/Images/Mexican.svg',
	iconSize:     [38, 95],
    iconAnchor:   [22, 94],
    popupAnchor:  [-3, -76]
});

// Italian Icon
var italian = L.icon({
	iconUrl: 'static/Images/Italian.svg',
	iconSize:     [38, 95],
    iconAnchor:   [22, 94],
    popupAnchor:  [-3, -76]
});

// Filipino Icon
var filipino = L.icon({
	iconUrl: 'static/Images/Filipino.svg',
	iconSize:     [38, 95],
    iconAnchor:   [22, 94],
    popupAnchor:  [-3, -76]
});

// Greek
var greek = L.icon({
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

// Arrays to store markers
var restaurantMarkers = [];
var veganMarkers = [];
var glutenFreeMarkers = [];
var chineseMarkers = [];
var japaneseMarkers = [];
var canadianMarkers = [];
var americanMarkers = [];
var koreanMarkers = [];
var mexicanMarkers = [];
var italianMarkers = [];
var filipinoMarkers = [];
var greekMarkers = [];
var cafeMarkers = [];
var sportsbarMarkers = [];
var danceMarkers = [];

console.log(data);


// loop through the data, create a new marker, push it to the corresponding markers array
for (var i = 0; i < data.length; i++) {

  // Split the categories into array
  var categories = data[i].Categories.toLowerCase().split(",");

  // If statement to assign the markers their respective icon
  if (categories.includes("vegan")) {
    veganMarkers.push(
      L.marker([(data[i].Latitude), (data[i].Longitude)],{icon: vegan}).bindPopup("<h2>Name: " + data[i].Name + "</h2>" + "<h3>Address: " + data[i].Address + "</h3>" + "<h3>Postal Code: " + data[i]["Postal code"] + "</h3>" + "<h3>Stars: " + data[i].Stars + "</h3>" )
    );
  } else if (categories.includes("gluten-free")) {
    glutenFreeMarkers.push(
      L.marker([(data[i].Latitude), (data[i].Longitude)],{icon: glutenFree}).bindPopup("<h2>Name: " + data[i].Name + "</h2>" + "<h3>Address: " + data[i].Address + "</h3>" + "<h3>Postal Code: " + data[i]["Postal code"] + "</h3>" + "<h3>Stars: " + data[i].Stars + "</h3>" )
    );
  } else if (categories.includes("chinese")) {
    chineseMarkers.push(
      L.marker([(data[i].Latitude), (data[i].Longitude)],{icon: chinese}).bindPopup("<h2>Name: " + data[i].Name + "</h2>" + "<h3>Address: " + data[i].Address + "</h3>" + "<h3>Postal Code: " + data[i]["Postal code"] + "</h3>" + "<h3>Stars: " + data[i].Stars + "</h3>" )
    );
  } else if (categories.includes("japanese")) {
    japaneseMarkers.push(
      L.marker([(data[i].Latitude), (data[i].Longitude)],{icon: japanese}).bindPopup("<h2>Name: " + data[i].Name + "</h2>" + "<h3>Address: " + data[i].Address + "</h3>" + "<h3>Postal Code: " + data[i]["Postal code"] + "</h3>" + "<h3>Stars: " + data[i].Stars + "</h3>" )
    );
  } else if (categories.includes("canadian (new)")) {
    canadianMarkers.push(
      L.marker([(data[i].Latitude), (data[i].Longitude)],{icon: canadian}).bindPopup("<h2>Name: " + data[i].Name + "</h2>" + "<h3>Address: " + data[i].Address + "</h3>" + "<h3>Postal Code: " + data[i]["Postal code"] + "</h3>" + "<h3>Stars: " + data[i].Stars + "</h3>" )
    );
  } else if (categories.includes("american (new)")) {
    americanMarkers.push(
      L.marker([(data[i].Latitude), (data[i].Longitude)],{icon: american}).bindPopup("<h2>Name: " + data[i].Name + "</h2>" + "<h3>Address: " + data[i].Address + "</h3>" + "<h3>Postal Code: " + data[i]["Postal code"] + "</h3>" + "<h3>Stars: " + data[i].Stars + "</h3>" )
    );
  } else if (categories.includes("korean")) {
    koreanMarkers.push(
      L.marker([(data[i].Latitude), (data[i].Longitude)],{icon: korean}).bindPopup("<h2>Name: " + data[i].Name + "</h2>" + "<h3>Address: " + data[i].Address + "</h3>" + "<h3>Postal Code: " + data[i]["Postal code"] + "</h3>" + "<h3>Stars: " + data[i].Stars + "</h3>" )
    );
  } else if (categories.includes("mexican")) {
    mexicanMarkers.push(
      L.marker([(data[i].Latitude), (data[i].Longitude)],{icon: mexican}).bindPopup("<h2>Name: " + data[i].Name + "</h2>" + "<h3>Address: " + data[i].Address + "</h3>" + "<h3>Postal Code: " + data[i]["Postal code"] + "</h3>" + "<h3>Stars: " + data[i].Stars + "</h3>" )
    );
  } else if (categories.includes("italian")) {
    italianMarkers.push(
      L.marker([(data[i].Latitude), (data[i].Longitude)],{icon: italian}).bindPopup("<h2>Name: " + data[i].Name + "</h2>" + "<h3>Address: " + data[i].Address + "</h3>" + "<h3>Postal Code: " + data[i]["Postal code"] + "</h3>" + "<h3>Stars: " + data[i].Stars + "</h3>" )
    );
  } else if (categories.includes("filipino")) {
    filipinoMarkers.push(
      L.marker([(data[i].Latitude), (data[i].Longitude)],{icon: filipino}).bindPopup("<h2>Name: " + data[i].Name + "</h2>" + "<h3>Address: " + data[i].Address + "</h3>" + "<h3>Postal Code: " + data[i]["Postal code"] + "</h3>" + "<h3>Stars: " + data[i].Stars + "</h3>" )
    );
  } else if (categories.includes("greek")) {
    greekMarkers.push(
      L.marker([(data[i].Latitude), (data[i].Longitude)],{icon: greek}).bindPopup("<h2>Name: " + data[i].Name + "</h2>" + "<h3>Address: " + data[i].Address + "</h3>" + "<h3>Postal Code: " + data[i]["Postal code"] + "</h3>" + "<h3>Stars: " + data[i].Stars + "</h3>" )
    );
  } else if (categories.includes("cafes")) {
    cafeMarkers.push(
      L.marker([(data[i].Latitude), (data[i].Longitude)],{icon: cafe}).bindPopup("<h2>Name: " + data[i].Name + "</h2>" + "<h3>Address: " + data[i].Address + "</h3>" + "<h3>Postal Code: " + data[i]["Postal code"] + "</h3>" + "<h3>Stars: " + data[i].Stars + "</h3>" )
    );
  } else if (categories.includes("sports bars")) {
    sportsbarMarkers.push(
      L.marker([(data[i].Latitude), (data[i].Longitude)],{icon: sportsbar}).bindPopup("<h2>Name: " + data[i].Name + "</h2>" + "<h3>Address: " + data[i].Address + "</h3>" + "<h3>Postal Code: " + data[i]["Postal code"] + "</h3>" + "<h3>Stars: " + data[i].Stars + "</h3>" )
    );
  } else if (categories.includes("dance clubs")) {
    danceMarkers.push(
      L.marker([(data[i].Latitude), (data[i].Longitude)],{icon: dance}).bindPopup("<h2>Name: " + data[i].Name + "</h2>" + "<h3>Address: " + data[i].Address + "</h3>" + "<h3>Postal Code: " + data[i]["Postal code"] + "</h3>" + "<h3>Stars: " + data[i].Stars + "</h3>" )
    );
  } else {
    restaurantMarkers.push(
      L.marker([(data[i].Latitude), (data[i].Longitude)],{icon: cutlery}).bindPopup("<h2>Name: " + data[i].Name + "</h2>" + "<h3>Address: " + data[i].Address + "</h3>" + "<h3>Postal Code: " + data[i]["Postal code"] + "</h3>" + "<h3>Stars: " + data[i].Stars + "</h3>" )
    );
  }
};

// Add all the Markers to new layer groups.
// Now we can handle categories as one group instead of referencing each individually
var restaurants = L.layerGroup(restaurantMarkers);
var veganM = L.layerGroup(veganMarkers);
var glutenFreeM = L.layerGroup(glutenFreeMarkers);
var chineseM = L.layerGroup(chineseMarkers);
var japaneseM = L.layerGroup(japaneseMarkers);
var canadianM = L.layerGroup(canadianMarkers);
var americanM = L.layerGroup(americanMarkers);
var koreanM = L.layerGroup(koreanMarkers);
var mexicanM = L.layerGroup(mexicanMarkers);
var italianM = L.layerGroup(italianMarkers);
var filipinoM = L.layerGroup(filipinoMarkers);
var greekM = L.layerGroup(greekMarkers);
var cafeM = L.layerGroup(cafeMarkers);
var sportsbarM = L.layerGroup(sportsbarMarkers);
var danceM = L.layerGroup(danceMarkers);




// Define variables for our tile layers
var day = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
});

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
  Day: day,
  Night: dark,
  Satellite: satellite,
  Fun: pirates
};

// Overlays that may be toggled on or off
var overlayMaps = {
  Unlabeled: restaurants,
  Vegan: veganM,
  GlutenFree: glutenFreeM,
  Chinese: chineseM,
  Japanese: japaneseM,
  Canadian: canadianM,
  American: americanM,
  Korean: koreanM,
  Mexican: mexicanM,
  Italian: italianM,
  Filipino: filipinoM,
  Greek: greekM,
  Cafe: cafeM,
  Sportsbar: sportsbarM,
  Dance: danceM
};

// Create map object and set default layers
var myMap = L.map("map", {
  center: [43.7179997, -79.4178587],
  zoom: 12,
  layers: [day, restaurants, veganM, glutenFreeM, chineseM, japaneseM, canadianM, americanM, koreanM, mexicanM, italianM, filipinoM, greekM, cafeM, sportsbarM, danceM]
});

// Pass our map layers into our layer control
// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps).addTo(myMap);
// Icons for the map
var cutlery = L.icon({
  iconUrl: 'static/Images/cutlery.svg',
  iconSize: [45, 95],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
});

var lcontrol;
var restaurants;
var day;
var baseMaps;
var overlayMaps;
var myMap;

// Function to populate the map with markers
var createMap = (data) => {

  // Separate the map data and catagories
  var map_data = data.map_data;
  var latitude_avg = data.latitude_avg;
  var longitude_avg = data.longitude_avg;
  console.log(map_data);
  console.log(latitude_avg);
  console.log(longitude_avg);

  // Create empty array to later store the markers 
  var markers = [];

  // Push the markers to the marker arrays
  map_data.forEach(row => {

    // Construct the marker data
    var marker = [
             row.Latitude,
             row.Longitude
    ];

    var icon = {icon: cutlery};

    // Construct the popup data
    var popup = '<b>Name: </b>' + row.Name + '<br>'
                + '<b>Address: </b>' + row.Address + '<br>'
                + '<b>Stars: </b>' + row.Stars + '<br>'
                + '<b>Categories: </b>';

    // Adding all the categories to the popup
    for (var i = 0; i < row.Categories.length; i++) {
      popup = popup + row.Categories[i];
      
      if (i + 1 < row.Categories.length) {
        // If we are not adding the last category space it with a comma
        popup = popup + ', ';
      }
    }

    // Bind the marker and popup data
    markers.push(L.marker(marker, icon).bindPopup(popup));
  });

  // Create layer group of the markers
  restaurants = L.layerGroup(markers);

  // Create tile layers
  day = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: mapboxApiKey
  });

	var dark = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
	  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
	  maxZoom: 18,
	  id: "mapbox.dark",
	  accessToken: mapboxApiKey
	});

	var satellite = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
	  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
	  maxZoom: 18,
	  id: "mapbox.satellite",
	  accessToken: mapboxApiKey
	});

	var pirates = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
	  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
	  maxZoom: 18,
	  id: "mapbox.pirates",
	  accessToken: mapboxApiKey
	});

	  // Only one base layer can be shown at a time
	  baseMaps = {
	  Day: day,
	  Night: dark,
	  Satellite: satellite,
	  Fun: pirates
	  };

  // Overlay maps that can be toggled on or off
  overlayMaps = {
    All: restaurants
  };

  // Create map object and set defaults
  myMap = L.map('map', {
    center: [latitude_avg, longitude_avg],
    zoom: 12,
    layers: [day, restaurants]
  });

  // Create control layer for our map
  lcontrol = L.control.layers(baseMaps, overlayMaps);
  lcontrol.addTo(myMap)
};

// Function to recreate the layers
var recreateMap = (data) => {

  // Clear the markers from the map
  restaurants.clearLayers();
  lcontrol.removeLayer(restaurants);

  // Separate the map data and catagories
  var map_data = data.map_data;
  var latitude_avg = data.latitude_avg;
  var longitude_avg = data.longitude_avg;
  console.log(map_data);
  console.log(latitude_avg);
  console.log(longitude_avg);

  // Create empty array to later store the markers 
  var markers = [];
  
  // Push the markers to the marker arrays
  map_data.forEach(row => {
  
    // Construct the marker data
    var marker = [
              row.Latitude,
              row.Longitude,
    ];
    
    var icon = {icon: cutlery};

    // Construct the popup data
    var popup = '<b>Name: </b>' + row.Name + '<br>'
                + '<b>Address: </b>' + row.Address + '<br>'
                + '<b>Stars: </b>' + row.Stars + '<br>'
                + '<b>Categories: </b>';

    // Adding all the categories to the popup
    for (var i = 0; i < row.Categories.length; i++) {
      popup = popup + row.Categories[i];
      
      if (i + 1 < row.Categories.length) {
        // If we are not adding the last category space it with a comma
        popup = popup + ', ';
      }
    }

    // Bind the marker and popup data
    markers.push(L.marker(marker, icon).bindPopup(popup));
  });

  // Create layer group of the markers, add it to the overlay and map them
  restaurants = L.layerGroup(markers); 
  lcontrol.addOverlay(restaurants, 'All');
  restaurants.addTo(myMap);

  // Smoothly zoom to the center of the new restaurants and reset the zoom
  myMap.flyTo([latitude_avg, longitude_avg], 12);
};
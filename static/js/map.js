d3.json('/api/data').then(function(data) {
  
  // 0=restaurants, 1=categoties
  console.log(data);

  // These are the restaurants
  console.log(data[0]);

  // These are the categories
  console.log(data[1]);

  // This is the first restaurant
  console.log(data[0][0]);

  // Cutlery Icon the default
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

  // Vegan Vegetarian Icon
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

  // French
  var french = L.icon({
    iconUrl: 'static/Images/French.svg',
    iconSize:     [38, 95],
      iconAnchor:   [22, 94],
      popupAnchor:  [-3, -76]
  });

  // German
  var german = L.icon({
    iconUrl: 'static/Images/German.svg',
    iconSize:     [38, 95],
      iconAnchor:   [22, 94],
      popupAnchor:  [-3, -76]
  });

  // Spanish
  var spanish = L.icon({
    iconUrl: 'static/Images/Spanish.svg',
    iconSize:     [38, 95],
      iconAnchor:   [22, 94],
      popupAnchor:  [-3, -76]
  });

  // Thai
  var thai = L.icon({
    iconUrl: 'static/Images/Thai.svg',
    iconSize:     [38, 95],
      iconAnchor:   [22, 94],
      popupAnchor:  [-3, -76]
  });

  // Brazilian
  var brazilian = L.icon({
    iconUrl: 'static/Images/Brazilian.svg',
    iconSize:     [38, 95],
      iconAnchor:   [22, 94],
      popupAnchor:  [-3, -76]
  });

  // Singaporean
  var singaporean = L.icon({
    iconUrl: 'static/Images/Singaporean.svg',
    iconSize:     [38, 95],
      iconAnchor:   [22, 94],
      popupAnchor:  [-3, -76]
  });

  // Empty array to to push arrays of markergroups
  var layers=[];

  // Empty object for the overlay
  var overlayMaps={};

  // Loop through every category in the array of categories
  data[1].forEach(category => {

    // Categories to loop through
    console.log(category.Category);

    // Empty array for the markers
    markers=[];

    // Loop through every restaurant in the array of restaurants
    data[0].forEach(restaurant => {
      console.log(restaurant);

      // If the category id is in the category ids column add the marker to the markers array
      if (restaurant.Category_ids.includes(category.Category_ids)) {
        markers.push(L.marker([(restaurant.Latitude),(restaurant.Longitude)],{icon: cutlery}).bindPopup("<h2>Name: " + restaurant.Name + "</h2>" + "<h3>Address: " + restaurant.Address + "</h3>" + "<h3>Postal Code: " + restaurant.Postal_code["Postal code"] + "</h3>" + "<h3>Stars: " + restaurant.Stars + "</h3>")
        )};

      // Push markers to the overlay
      overlayMaps[category.Category]=markers;

      // Push the category markers to the layer groups
      layers.push(L.layerGroup(markers));

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

      // Create map object and set default layers
      var myMap = L.map("map", {
        center: [43.7179997, -79.42919975],
        zoom: 10,
        layers: [day, restaurants]
      });

      // Pass our map layers into our layer control
      // Add the layer control to the map
      L.control.layers(baseMaps, overlayMaps).addTo(myMap);      

    });

    /* var popup = L.popup({
      closeButton: true,
      autoClose: false,
      keepInView: true,
      closeOnClick: false,
      className: 'suggested'
    })
    .setLatLng([43.7392, -79.9903])
    .setContent('<p>Top suggestions:</p>' + '<p>Restaurant Name 1:</p>' + '<p>Restaurant Name 2:</p>' + '<p>Restaurant Name 2:</p>')
    .addTo(myMap).openPopup; */
  });
});
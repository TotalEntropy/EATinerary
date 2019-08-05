// References to index.html form paramaters
const submitBtn = d3.select('#submitButton')
const cityField = d3.select('#myInput')

// When the submit button is clicked
submitBtn.on('click', () => {
  // Prevent refresh
  d3.event.preventDefault();

  // Store the value placed in city
  var city = cityField.property('value').toLowerCase().trim();
  console.log(city);

  unique_cities_lower = unique_cities.map(function(x){return x.toLowerCase()});

  console.log(unique_cities_lower);

  if (unique_cities_lower.includes(city)) {

    // Store the user's current time and pass it to the server
    var date = new Date();
    var clientTime = {
      day:date.getDay(),
      h:date.getHours(),
      m:date.getMinutes()
    };
    console.log(clientTime);

    // Empty array to store the attributes values in
    var attributes = [];

    // Loop through all the checkboxes
    d3.selectAll('.choice').each(function(d) {

      // Return whether the checkbox is checked or not
      cb = d3.select(this).select('input').property('checked');

      // Select the text of the checkbox
      text = d3.select(this).select('input').property('value');

      attributes.push({name:text, value:cb});
    });

    console.log(attributes);

    // Convert the objects for the server
    clientTime = JSON.stringify(clientTime);
    attributes = JSON.stringify(attributes);

    d3.json('/api/' + city + '/' + clientTime + '/'+attributes)
    .then(function(d) {

      // Check if there were any restaurants found
      if (d.map_data.length == 0) {
        // Let the user know no values were found
        console.log('Sorry no results were found in that city with those '
                    + 'restrictions :(');

        window.alert('Sorry no results were found in that city with those '
                    + 'restrictions :(');

        // TODO add logic to pick next closest results

      } else {

        $('html, body').animate( {
          scrollTop: $('div.map').offset().top,
        }, 500, 'linear')

        // If the map hasn't been created yet
        if (typeof lcontrol == 'undefined') {
          // Run the createMap function to create the map found in map.js
          createMap(d);
        } else {
          // Remove the old layers and add the new data
          recreateMap(d);
        }

        // TODO add autoscroll
      }
    });
  } else {
    // Let the user know the city is not one in our database and no results
    // can be found
    console.log('Sorry there are no results for that city');
    window.alert('Sorry there are no results for that city :(');
  }
});

$(window).on("resize", function() {
  $("#map").height($(window).height()-59).width($(window).width());
}).trigger("resize");
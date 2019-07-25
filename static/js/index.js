// References to index.html form paramaters
const submitBtn=d3.select('#submitButton')
const cityField=d3.select('#myInput')

// When the submit button is clicked
submitBtn.on('click', () => {
  // Prevent refresh
  d3.event.preventDefault();

  // Store the value placed in city
  var city=cityField.property('value').trim().toLowerCase();

  // Empty array to store the attributes values in
  var attributes=[];

  console.log(city);

  // Loop through all the checkboxes
  d3.selectAll('.choice').each(function(d) {

    // Return whether the checkbox is checked or not
    cb=d3.select(this).select('input').property('checked');

    // Select the text of the checkbox
    text=d3.select(this).select('input').property('value');

    attributes.push({name:text, value:cb});
  });

  console.log(attributes);

  // Convert the list for server
  attributes=JSON.stringify(attributes);

  d3.json('/api/'+city+'/'+attributes).then(function(data) {

    // Run map function to create the map found in map.js
    createMap(data);
  });
});
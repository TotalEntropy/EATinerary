// Select the form
const cityInput = d3.select("#city");
const starsInput = d3.select("#stars");
const button

// Select generate a map
const generateMap = d3.select("#btn btn-default btn-lg btn-block");

generateMap.on("click", () => {
    var stars = starsInput.property("value");
    console.log(stars)
    if(stars <= 0 && stars > 5){
        console.log("Please enter a value greater than 0 and less than or equal to 5 :(")
        window.alert("Please enter a value greater than 0 and less than or equal to 5 :(");
    }
    else {
        
    };
    var city = cityInput.property("value").trim().toLowerCase();
});
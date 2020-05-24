//OpenWeather API Logic//
// creating search parameters for weatherApi//
var input = document.getElementById("searchTxt");
var search = document.getElementById("searchBtn");
// Calling upon "openweathermap.org" API to ask the weather//

function myFunction() {
    var city = input.value;
    $.ajax({
        type:"GET",
        url: `https://api.openweathermap.org/data/2.5/weather?q=${city},us&appid=f971d830a87e81768e1ac88bc93cfda0`,
        success: function(weatherMap) {
            console.log(weatherMap)
          $( "#weather-temp" ).html( "<strong>" + weatherMap + "</strong> degrees" );
          console.log(weatherMap.wind.speed);
    // Pulling precise data from api//
        var degreesF = Math.round(((weatherMap.main.temp - 273.15)*1.8)+32);
        var humidity = weatherMap.main.humidity + "%";
        var windSpeed = Math.round(weatherMap.wind.speed) + " " + "mph";
        var lat = weatherMap.coord.lat;
        var lon = weatherMap.coord.lon

          console.log(weatherMap.coord.lon)
          console.log(weatherMap.coord.lat)
          console.log(weatherMap.coord)

          //creating another call to find the UV Index//
          $.ajax({
            type:"GET",
            url: `http://api.openweathermap.org/v3/uvi/${lat},${lon}/current.json?appid=f971d830a87e81768e1ac88bc93cfda0`,
            success: function(uvmap) {
              // Appending search result to historical div//
              $( "#historical").html( "<strong>" + city + "</strong> degrees" );
              // Appending current weather information//
              $( "#historical").html( "<strong>" + degreesF + "</strong> degrees" );
              $( "#historical").html( "<strong>" + humidity + "</strong> %" );
              $( "#historical").html( "<strong>" + windSpeed + "</strong> mph" );



              
                console.log(uvmap)
              $( "#weather-temp" ).html( "<strong>" + uvmap + "</strong> degrees" );
              
              console.log(weather-temp);
      }
      })
          console.log(degreesF + "degrees")
          console.log(humidity)
          console.log(windSpeed) 
  }

})
}

var places = {
    "Zakopane": {
        'lon':  20.008202,
        'lat':  49.217029,
    },

    "Poprad": {
        'lon':  20.012120,
        'lat':  49.232051,
    },
};

function getWeather(places, units){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://community-open-weather-map.p.rapidapi.com/weather",
        "data": {places:
             {'lon': lon, 'lat': lat},
              units: 'metric'},
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key": "dffece06afmsheb06bed2195d2cbp197205jsn5a31dea67e6c"
        }
    }
 $.ajax(settings).done(function (response) {
       
        jsonData = JSON.parse(response);
        jsonData.main.temp.innerHTML(
        { "main": {
                "temp": 10,
                "feels_like": 6.68,
                "temp_min": 10,
                "temp_max": 10,
                "pressure": 1031,
                "humidity": 34
            },
            "visibility": 10000,
            "wind": {
                "speed": 1
            },
            "clouds": {
                "all": 0
            },
            "dt": 1586195007,
            "sys": {
                "type": 1,
                "id": 7053,
                "country": "PL",
                "sunrise": 1586145963,
                "sunset": 1586193487
            },
            "timezone": 7200,
            "id": 7531513,
            "name": "Zakopane",
            "cod": 200})
            .toString()
      
        
        
        console.log(response);
    }).error(function(response){
        console.log(response);
    });
}

document.getElementsByClassName('weather-api-btn')
    .click(function(event){
    handleListener(button);
});

    var button = ".btn"

    function handleListener(button){
    getWeather(this.lat, this.lon, metric).innerHTML = `The weather in ${this.id} is: ${this.response}`;        

    }


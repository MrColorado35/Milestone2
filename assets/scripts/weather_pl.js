var places = {
    "Zakopane": {
        'lon':  20.008202,
        'lat':  49.217029,
    },

    "Poprad": {
        'lon':  20.012120,
        'lat':  49.232051,
    },
}

function getWeather(lon, lat, units){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://community-open-weather-map.p.rapidapi.com/weather",
        "data": {'lon': lon, 'lat': lat, 'units': 'metric'},
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key": "dffece06afmsheb06bed2195d2cbp197205jsn5a31dea67e6c"
        }
    }


    $.ajax(settings).done(function (response) {
	console.log(response);
});

}
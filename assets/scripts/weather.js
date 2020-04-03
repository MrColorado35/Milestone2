function weather() {

            var unirest = require("unirest");

            var req = unirest("GET", "https://climacell-microweather-v1.p.rapidapi.com/weather/nowcast");

            req.query({
                "fields": "precipitation",
                "unit_system": "undefined",
                "lat": "49.217029",
                "lon": "20.008202"
            });

            req.headers({
                "x-rapidapi-host": "climacell-microweather-v1.p.rapidapi.com",
                "x-rapidapi-key": "dffece06afmsheb06bed2195d2cbp197205jsn5a31dea67e6c"
            });


            req.end(function (res) {
                if (res.error) throw new Error(res.error);

                console.log(res.body);
            });
        }


        console.log("I huj nie wiem co sie dzieje")
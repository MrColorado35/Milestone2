
console.log("I huj nie wiem co sie dzieje")
// function weather() {

//             var unirest = require("unirest");

//             var req = unirest("GET", "https://climacell-microweather-v1.p.rapidapi.com/weather/nowcast");

//             req.query({
//                 "fields": "precipitation",
//                 "unit_system": "undefined",
//                 "lat": "49.217029",
//                 "lon": "20.008202"
//             });

//             req.headers({
//                 "x-rapidapi-host": "climacell-microweather-v1.p.rapidapi.com",
//                 "x-rapidapi-key": "dffece06afmsheb06bed2195d2cbp197205jsn5a31dea67e6c"
//             });


//             req.end(function (res) {
//                 if (res.error) throw new Error(res.error);

//                 console.log(res.body);
//             });
//         }
// function weather(){







// var settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://climacell-microweather-v1.p.rapidapi.com/weather/nowcast?fields=precipitation&unit_system=undefined&lat=49.217029&lon=-20.008202",
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "climacell-microweather-v1.p.rapidapi.com",
// 		"x-rapidapi-key": "dffece06afmsheb06bed2195d2cbp197205jsn5a31dea67e6c"
// 	    }
//     }

//     $.ajax(settings).done(function (response) {
//         console.log(response);

// });
// }







var http = require("https");

var options = {
	"method": "GET",
	"hostname": "climacell-microweather-v1.p.rapidapi.com",
	"port": null,
	"path": "/weather/nowcast?fields=precipitation&unit_system=undefined&lat=49.217029&lon=20.008202",
	"headers": {
		"x-rapidapi-host": "climacell-microweather-v1.p.rapidapi.com",
		"x-rapidapi-key": "dffece06afmsheb06bed2195d2cbp197205jsn5a31dea67e6c"
	}
};



var req = http.request(options, function (res) {
	var chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		var body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();

function whyTheHellYouDontWork(){
var unirest = require('unirest');
var express = require('express');
var app = express();

app.get('/', function(req, res){
unirest.get("https://community-open-weather-map.p.rapidapi.com/weather")
  .header("X-RapidAPI-Key", "2b5c955a0amsh99a61f7c3a0d4d7p16216fjsn526a2e357a3e")
  .header("x-rapidapi-host", "community-open-weather-map.p.rapidapi.com")
  .query({
      'appid': "Weather_Tatry",
      'lon': '20.008202',
      'lat': '49.217029',
      'units': 'metric',
      'mode': 'html'
  })
  .end(function (result) {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(result.body);
      console.log('Pogoda');
  });
})
app.listen(8081, function(){
  console.log('Server running at https://127.0.0.1:8081/');
});
}
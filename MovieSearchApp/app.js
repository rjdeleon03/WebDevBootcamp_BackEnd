var express = require("express");
var app = express();

var request = require("request");

app.get("/results", function(req, res) {
    request("http://www.omdbapi.com/?apikey=thewdb&s=california", function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var parsedData = JSON.parse(body);    
            res.send(parsedData["Search"][0]["Title"]);
        }    
    });
});

// Tell express to listen
app.listen(3000, function() {
    console.log("Movie app has started!");
});
var express = require("express");
var app = express();

var request = require("request");

// Setup ejs
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("search");
});

app.get("/results", function(req, res) {
    var query = req.query.search;
    var url = "http://www.omdbapi.com/?apikey=thewdb&s=" + query;
    console.log(url + query);
    request(url, function(error, response, body) {
        if (!error && response.statusCode == 200) {

            // Parse data then pass to ejs
            var data = JSON.parse(body);    
            res.render("results", {data: data});
        }    
    });
});

// Tell express to listen
app.listen(3000, function() {
    console.log("Movie app has started!");
});
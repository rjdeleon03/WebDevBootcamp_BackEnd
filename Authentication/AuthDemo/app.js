var express     = require("express");
var app         = express();
var mongoose    = require("mongoose");

mongoose.connect("mongodb://localhost/auth_demo");

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("home");
});

// SECRET ROUTE
app.get("/secret", function(req, res) {
    res.render("secret");
});

app.listen(3000, function() {
    console.log("AuthDemo is running...");
});
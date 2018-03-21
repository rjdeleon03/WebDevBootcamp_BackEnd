var express = require("express")
var app = express();

// serve public folder
app.use(express.static("public"));

// use ejs
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/fallinlovewith/:thing", function(req, res) {
    var thing = req.params.thing;
    res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res) {
    var posts = [
        {title: "Post 1", author: "Susy"},
        {title: "My adorable pet bunny", author: "Max"},
        {title: "Can you believe it?", author: "Jill"},
    ]
    res.render("posts", {posts: posts});
});

app.listen(3000, function() {
    console.log("Server is listening!");
});
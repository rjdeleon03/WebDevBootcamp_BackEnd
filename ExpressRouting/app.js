var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res) {
    var animal = req.params.animal.toLowerCase();
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof!",
        cat: "I hate you human",
        goldfish: "..."
    }
    res.send("The " + animal + " says '" + sounds[animal] + "'");
});

app.get("/repeat/:string/:count", function(req, res) {
    var repStr = req.params.string;
    var repCount = Number(req.params.count);
    var completeStr = "";

    for (var i = 0; i < repCount; i++) {
        completeStr += repStr + " ";
    }
    res.send(completeStr);
});

app.get("*", function(req, res) {
    res.send("Sorry, page not found... What are you doing with your life?");
});

app.listen(3000, function() {    
    console.log("Serving express routing app on port 3000");
})
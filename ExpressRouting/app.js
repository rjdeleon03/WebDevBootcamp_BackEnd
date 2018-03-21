var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res) {
    var animal = req.params.animal;
    var animalSound = "";
    if (animal === "pig") {
        animalSound = "Oink";
    } else if (animal === "cow") {
        animalSound = "Moo";
    } else if (animal === "dog") {
        animalSound = "Woof Woof!";
    }
    res.send("The " + animal + " says \'" + animalSound + "\'");
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
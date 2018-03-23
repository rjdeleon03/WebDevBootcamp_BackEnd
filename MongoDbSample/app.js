var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

// Define cat schema
var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// add a new cat to the db
var george = new Cat({
    name: "Johnny",
    age: 11,
    temperament: "Grouchy"
});
george.save(function(err, cat) {
    if (err) {
        console.log("Something went wrong!");
    } else {
        // console.log(cat);
    }
});

// retrieve all cats from the DB and console.log each one
Cat.find({}, function(err, cats) {
    if(err) {
        console.log("Something went wrong!");
    } else {
        cats.forEach(function (cat) {
            console.log(cat);
        });
    }
})
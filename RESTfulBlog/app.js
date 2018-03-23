var express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    app = express();

// APP CONFIG
mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default:Date.now}
});
var Blog = mongoose.model("Blog", blogSchema);

// RESTFUL ROUTES
app.get("/", function(req, res) {
    res.redirect("/blogs");
});

app.get("/blogs", function(req, res) {
    Blog.find({}, function(err, blogs) {
        if(err) {
            console.log("Error retrieving blogs!")
        } else {
            res.render("index", {blogs: blogs});
        }
    });
});

// LISTEN TO PORT 3000
app.listen(3000, function() {
    console.log("RESTful Blog is being served...");
});
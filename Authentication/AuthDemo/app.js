var express                 = require("express"),
    mongoose                = require("mongoose"),
    passport                = require("passport"),
    bodyParser              = require("body-parser"),
    LocalStrategy           = require("passport-local"),
    passportLocalMongoose   = require("passport-local-mongoose"),
    User                    = require("./models/user");

mongoose.connect("mongodb://localhost/auth_demo");

var app = express();
app.set("view engine", "ejs");

// Use bodyParser
app.use(bodyParser.urlencoded({extended: true}));

// Add express session
app.use(require("express-session")({
    secret: "Don't forget to look before you fall",
    resave: false,
    saveUninitialized: false
}));

// Setup passport
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));

// Encode data and put back to session
passport.serializeUser(User.serializeUser());

// Read the session
// Take session data
passport.deserializeUser(User.deserializeUser());

// ========================
// ROUTES
// ========================

// INDEX ROUTE
app.get("/", function(req, res) {
    res.render("home");
});

// SECRET ROUTE
app.get("/secret", function(req, res) {
    res.render("secret");
});

// AUTH ROUTES
// Show sign up form
app.get("/register", function(req, res) {
    res.render("register");
});

// Handle user sign up
app.post("/register", function(req, res) {

    // Pass password as second parameter for it to be hashed
    User.register(new User({username: req.body.username}), req.body.password, 
    function(err, user) {
        if (err) {
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function() {
            res.redirect("/secret");
        });
    });
});

// LOGIN ROUTES
// Render login form
app.get("/login", function(req, res) {
    res.render("login");
});

// Login logic
app.post("/login", 
    // Passport is run as middleware - executed before callback
    passport.authenticate("local", {
        successRedirect: "/secret",
        failureRedirect: "/login"
    }), 
    function(req, res) {});

// LISTEN TO PORT 3000
app.listen(3000, function() {
    console.log("AuthDemo is running...");
});
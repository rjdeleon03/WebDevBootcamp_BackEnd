var mongoose = require("mongoose");

// USER
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }] // array of posts
});

module.exports = mongoose.model("User", userSchema);
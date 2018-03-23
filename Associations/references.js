var mongoose = require("mongoose");

// POST
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});
var Post = mongoose.model("Post", postSchema);
mongoose.connect("mongodb://localhost/blog_demo_ref");

// USER
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }] // array of posts
});
var User = mongoose.model("User", userSchema);

// User.create({
//     email: "bob@gmail.com",
//     name: "Bob Belcher"
// });

// Post.create({
//     title: "Aregrsdfe",
//     content: "blah blah blah"
// }, function (err, post) {
//     console.log(post);
//     User.findOne({email: "bob@gmail.com"}, function(err, foundUser) {
//         if (err) {
//             console.log(err);
//         } else {
//             foundUser.posts.push(post);
//             foundUser.save(function(err, data) {
//                 if (err) {
//                     console.log(err);
//                 } else {
//                     console.log(data);
//                 }
//             });
//         }
//     });
// })

// Find user and all posts
User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user) {
    if (err) {
        console.log(err);
    } else {
        console.log(user);
    }
});
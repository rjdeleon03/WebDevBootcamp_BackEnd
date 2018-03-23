var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_ref")

var Post = require("./models/post")
var User = require("./models/user")

// User.create({
//     email: "bob@gmail.com",
//     name: "Bob Belcher"
// });

// Post.create({
//     title: "Trains are fun to ride",
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
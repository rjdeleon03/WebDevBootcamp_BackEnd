var mongoose = require("mongoose");

// POST
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});
var Post = mongoose.model("Post", postSchema);
mongoose.connect("mongodb://localhost/blog_demo");

// USER
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema] // array of posts
});
var User = mongoose.model("User", userSchema);

// var newUser = new User({
//     email: "hermione@hogwards.edu",
//     name: "Hermione Granger"
// });

// newUser.posts.push({
//     title: "How to brew polyjuice potion",
//     content: "Just kidding. Go to potions class."
// });

// newUser.save(function(err, user) {
//     if (err) {
//         console.log("error");
//     } else {
//         console.log(user);
//     }
// });

// var newPost = new Post({
//     title: "Reflections on Apples",
//     content: "They are delicious"
// });

// newPost.save(function(err, post) {
//     if (err) {
//         console.log("error");
//     } else {
//         console.log(post);
//     }
// });

User.findOne({name: "Hermione Granger"}, function(err, user) {
    if (err) {
        console.log("error");
    } else {
        user.posts.push({
            title: "Reflections on Apples",
            content: "They are delicious"
        });
        user.save(function(err, user) {
            if (err) {
                console.log("error");
            } else {
                console.log(user);
            }
        });
    }
});
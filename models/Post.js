const mongoose = require("mongoose");
const { Schema } = mongoose;

const PostSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  description: String,
  body: String,
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  likes: Number,
  views: Number,
});

const Post = mongoose.model("Post", PostSchema);
module.exports = Post;

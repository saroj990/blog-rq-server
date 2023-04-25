var express = require("express");
var router = express.Router();
const Post = require("../models/Post");

/* GET users listing. */
router.get("/create", async function (req, res, next) {
  const posts = [
    {
      title: "Introduction to NodeJs",
      likes: 100,
      views: 100,
      author: "Sam",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software likes Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      title: "Introduction to VueJs",
      likes: 10,
      views: 20,
      author: "Sam",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software likes Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      title: "Introduction to Svelte",
      likes: 100,
      views: 100,
      author: "Sam",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software likes Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      title: "Introduction to React Native",
      likess: 100,
      views: 100,
      author: "Saroj",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software likes Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];
  await Post.insertMany(posts);
  const data = await Post.find({});
  return res.json(data);
});
router.get("/", async function (req, res, next) {
  const posts = await Post.find({});
  return res.json(posts);
});

router.get("/:id", async function (req, res, next) {
  const { id } = req.params;
  const posts = await Post.findById(id).exec();
  return res.json(posts);
});

router.post("/", async function (req, res, next) {
  const { title, description } = req.body;
  try {
    const post = await Post.create({
      title,
      description,
      likess: 100,
      views: 100,
      author: "saroj",
    });
    return res.json(post);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/:id", async function (req, res, next) {
  const { id } = req.params;
  console.log("id: ", id);
  try {
    const post = await Post.findByIdAndDelete(id).lean();
    return res.json(post);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/", async function (req, res, next) {
  const { title, description } = req.body;
  const { id } = req.query;
  try {
    const post = await Post.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );
    return res.json(post);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;

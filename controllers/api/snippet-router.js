const router = require("express").Router();
const { Snippet } = require("../../models");
const withAuth = require("../../util/withAuth");

router.post("/", withAuth, async (req, res) => {
  try {
    console.log("post ok");
    // get tag names

    //tag names with existing tag names

    console.log(req.body);
    const newSnippet = await Snippet.create({
      ...req.body,
      user_id: req.session.userId,
    });
    res.status(200).json(newSnippet);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;

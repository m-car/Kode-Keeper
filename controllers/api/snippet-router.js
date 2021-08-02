const router = require("express").Router();
const { Snippet, Tag, User } = require("../../models");
const withAuth = require("../../util/withAuth");

router.post("/", withAuth, async (req, res) => {
  try {
    const currentUser = await User.findByPk(req.session.userId);
    const newSnippet = await currentUser.createSnippet({
      snippet_name: req.body.snippet_name,
      language: req.body.language,
      snippet: req.body.snippet,
    });
    const tagArr = req.body.tag_name.split(",").map((value) => {
      return value.trim().toLowerCase();
    });
    for (const element of tagArr) {
      const existing = await Tag.findAll({
        where: {
          tag_name: element,
        },
      });
      if (existing[0]) {
        await currentUser.addTag(existing[0]);
        await newSnippet.addTag(existing[0]);
      } else {
        const newTag = await Tag.create({
          tag_name: element,
        });
        await currentUser.addTag(newTag);
        await newSnippet.addTag(newTag);
      }
    }
    const newTag = await Tag.create({
      tag_name: req.body.tag_name,
      user_id: req.session.userId,
    });
    console.log(newTag);
    //tag names with existing tag names

    // console.log(req.body);

    // await newSnippet.addTags(tagArr);

    res.status(200).json({ newSnippet });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;

const router = require("express").Router();
const { Tag, User } = require("../../models");
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
    console.log(tagArr);
    for (const element of tagArr) {
      const existing = await Tag.findAll({
        where: {
          tag_name: element,
        },
      });
      console.log("Existing", existing[0]);
      if (existing[0]) {
        console.log("Adding existing tag to snippet");
        await newSnippet.addTag(existing[0]);
      } else {
        console.log("Creating new tag");
        const newTag = await currentUser.createTag({
          tag_name: element,
        });
        console.log("Adding new tag to snippet");

        await newSnippet.addTag(newTag);
      }
    }

    res.status(200).json({ newSnippet });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;

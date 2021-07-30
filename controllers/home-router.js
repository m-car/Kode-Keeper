const router = require("express").Router();
const { User, Tag, Snippet, SnippetTag } = require("../models");
const withAuth = require("../util/withAuth");

router.get("/", async (req, res) => {
  try {
    let user;
    if (req.session.isLoggedIn) {
      user = await User.findByPk(req.session.userId, {
        exclude: ["password"],
        raw: true,
      });
    }
    res.render("home", {
      title: "Home Page",
      isLoggedIn: req.session.isLoggedIn,
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("⛔ Uh oh! An unexpected error occurred.");
  }
});

router.get("/login", (req, res) => {
  res.render("login", { title: "Log-In/Sign-up Page" });
});

router.get("/find", withAuth, async (req, res) => {
  // object should look like
  // {
  //   snippet-name: 'snippetname',
  //   snippet: `some
  //   code here
  //   and here`,
  //   language: 'javascript',
  //   tags: [
  //     {},
  //     {}
  //   ]
  // }
  try {
    const snippetData = await Snippet.findAll({
      where: {
        user_id: req.session.userId,
      },
      include: [{ model: Tag, through: SnippetTag, as: "tags" }],
    });
    if (!snippetData) {
      res.status(404).json({
        message:
          "Oh no, it doesn't look like any snippets match this tag or name",
      });
    } else {
      // const simpleData = snippetData.get({ plain: true });
      const simpleData = snippetData.map((obj) => {
        return obj.get({ plain: true });
      });
      res.render("find", { simpleData });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.get("/create", withAuth, (req, res) => {
  res.render("create", { title: "Create Snippet" });
});

module.exports = router;

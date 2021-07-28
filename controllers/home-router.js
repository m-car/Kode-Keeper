const router = require("express").Router();
const { User } = require("../models");
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

router.get("/find", withAuth, (req, res) => {
  res.render("find", { title: "Find Snippet" });
});

router.get("/create", withAuth, (req, res) => {
  res.render("create", { title: "Create Snippet" });
});

module.exports = router;

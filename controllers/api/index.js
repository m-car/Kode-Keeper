const router = require("express").Router();
const usersRouter = require("./users-router");
const snippetRouter = require("./snippet-router");

router.use("/users", usersRouter);
router.use("/snippets", snippetRouter);
module.exports = router;

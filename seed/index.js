require("dotenv").config();
const sequelize = require("../config/connection");
const { User, Tag } = require("../models");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  const smitty = await User.create({
    username: "smitty",
    password: "password",
  });

  const headerTag = await Tag.create({
    tag_name: "header",
  });
  const passwordTag = await Tag.create({
    tag_name: "password",
  });

  const randomTag = await Tag.create({
    tag_name: "random",
  });

  await smitty.addTags([headerTag, passwordTag, randomTag]);

  const cssSnippet = await smitty.createSnippet({
    snippet_name: "Mode",
    language: "CSS",
    snippet: `.main-header {
    display: flex;
    justify-content: space-between;
    padding: 60px;
    background: #13293d;
    color: #fff;`,
  });
  const jsSnippet = await smitty.createSnippet({
    snippet_name: "Hash Password",
    language: "Javascript",
    snippet: `beforeCreate: async (newUserData) => {
    newUserData.password = await bcrypt.hash(newUserData.password, 10);
    return newUserData;`,
  });
  await cssSnippet.addTag(headerTag);
  await jsSnippet.addTag(passwordTag);
  await jsSnippet.addTag(randomTag);
  process.exit(0);
};

seedDatabase();

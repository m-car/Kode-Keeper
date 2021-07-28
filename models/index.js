const User = require("./User");
const Tag = require("./Tag");
const Snippet = require("./Snippet");
const SnippetTag = require("./SnippetTag");

// Define sequelize associations in this file.
User.hasMany(Snippet, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Snippet.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Tag, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Tag.belongsTo(User, {
  foreignKey: "user_id",
});

Tag.belongsToMany(Snippet, {
  through: {
    model: SnippetTag,
    unique: true,
  },
});

Snippet.belongsToMany(Tag, {
  through: {
    model: SnippetTag,
    unique: true,
  },
});

module.exports = { User, Tag, SnippetTag, Snippet };

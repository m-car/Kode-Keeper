const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Tag extends Model {}

Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "tag",
    indexes: [
      {
        unique: true,
        fields: ["tag_name", "user_id"],
      },
    ],
  }
);

module.exports = Tag;

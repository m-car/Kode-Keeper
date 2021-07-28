const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class SnippetTag extends Model {}

SnippetTag.init({
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    tag_name: {
        type: DataTypes.STRING,

    },

},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'snippetTag',
})

module.exports = SnippetTag;
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class SnippetTag extends Model {}

SnippetTag.init({

},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'snippetTag',
})

module.exports = SnippetTag;
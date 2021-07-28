const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class SnippetTag extends Model {}

SnippetTag.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    tag_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'tag',
            key: 'id',
            unique: false
        }
    },
    snippet_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'snippet',
            key: 'id',
            unique: false
        }
    }
    
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'snippetTag',
})

module.exports = SnippetTag;
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Snippet extends Model {}

Snippet.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        snippet_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        snippet: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        language: {
            type: DataTypes.ENUM('HTML', 'CSS', 'Javascript', 'MySql', 'Sequelize', 'Node', 'Express', 'Handlebars', 'Markdown'),
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            }
        },
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'snippet',
    }
);

module.exports = Snippet;
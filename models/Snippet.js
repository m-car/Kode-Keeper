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
          }
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
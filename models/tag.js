'use strict';

module.exports = (sequelize, DataTypes) => {
    const Tag = sequelize.define('Tag', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING,
            unique: true
        }
    }, {
        tableName: 'tags',
        timestamps: true
    });

    Tag.belongsTo(models.User);

    Tag.associate = function(models){
        Tag.belongsToMany(models.Product, {
            through: {
                model: models.TagJoin,
                unique: false,
            },
            foreignKey: 'tagId',
            constraints: false,
            as: 'products'
        });

    };

    return Tag;
};
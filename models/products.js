"use strict";

module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("Product", { 
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        productPermlink: {
            type: DataTypes.STRING,
            allowNull: false
        },
        productPrice: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        productDescription: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        productComment: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
        }
    }, {
        tableName: 'products',
        timestamps: true
    });

    Problem.belongsTo(models.User);

    Problem.belongsToMany(models.Tag, {
        through: {
          model: models.TagJoin,
          unique: false,
          scope: {
            taggable: 'tags'
          },
        },
        as: 'tags',
        foreignKey: 'taggableId',
        otherKey: 'tagId',
        constraints: false
    });

    return Product;
};
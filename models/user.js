"use strict";

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userEmail: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userPassword: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isAdmin: {
            allowNull: false,
            type: DataTypes.BOOLEAN
        },
        isCustomer: {
            allowNull: false,
            type: DataTypes.BOOLEAN
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        }
        }, {
            tableName: "users",
            timestamps: true
    });

    User.hasMany(models.Product, { as: 'products' });
    User.hasOne(models.Customer, { as: 'customer' });

    return User;
};

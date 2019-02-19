"use strict";

module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define("Customer", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            firstName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            address1: {
                type: DataTypes.STRING,
                allowNull: false
            },
            address2: {
                type: DataTypes.STRING
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            phone: {
                type: DataTypes.STRING
            },
            cell: {
                type: DataTypes.STRING
            },
            postcode: {
                type: DataTypes.STRING,
                allowNull: false
            },
            country: {
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
        }, 
        {
            tableName: "customers",
            timestamps: true
    });

    Customer.hasOne(models.User, { as: 'user' });
    Customer.hasMany(models.Order, { as: 'orders' });

    return Customer;
};

"use strict";

module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define("Order", { 
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        orderDate: {
            allowNull: false,
            type: DataTypes.DATE
        },
        orderId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        paymentGatewayRef: {
            type: DataTypes.INTEGER
        },
        paymentGateway: {
            type: DataTypes.STRING
        },
        orderTotalAmount: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        EmailAddress: {
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
        country: {
            type: DataTypes.STRING
        },
        postcode: {
            type: DataTypes.STRING
        },
        phone: {
            type: DataTypes.STRING
        },
        orderComment: {
            type: DataTypes.TEXT
        },
        customerId: {
            type: DataTypes.INTEGER,
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
    });

    Order.belongsToMany(models.Product, {
        through: {
          model: models.OrderProduct,
        },
        as: 'users',
        foreignKey: 'groupId'
    });

    Group.belongsTo(models.User, {
        as: 'users',
        foreignKey: 'groupId'
    });

    return Order;
};
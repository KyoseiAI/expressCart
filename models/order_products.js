"use strict";

module.exports = (sequelize, DataTypes) => {
    const OrderProduct = sequelize.define("OrderProduct", { 
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        productAddedDate: {
            allowNull: false,
            type: DataTypes.DATE
        },
        orderId: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        productId: {
            allowNull: false,
            type: DataTypes.INTEGER
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

    return OrderProduct;
};
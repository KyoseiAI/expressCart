'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('orders', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            orderDate: {
                allowNull: false,
                type: Sequelize.DATE
            },
            orderId: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            paymentGatewayRef: {
                type: Sequelize.INTEGER
            },
            paymentGateway: {
                type: Sequelize.STRING
            },
            orderTotalAmount: {
                type: Sequelize.DOUBLE,
                allowNull: false
            },
            EmailAddress: {
                type: Sequelize.STRING,
                allowNull: false
            },
            firstName: {
                type: Sequelize.STRING,
                allowNull: false
            },
            lastName: {
                type: Sequelize.STRING,
                allowNull: false
            },
            address1: {
                type: Sequelize.STRING,
                allowNull: false
            },
            address2: {
                type: Sequelize.STRING
            },
            country: {
                type: Sequelize.STRING
            },
            postcode: {
                type: Sequelize.STRING
            },
            phone: {
                type: Sequelize.STRING
            },
            orderComment: {
                type: Sequelize.TEXT
            },
            customerId: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('orders');
    }
};
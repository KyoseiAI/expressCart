'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('products', { 
          id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
          },
          productPermlink: {
              type: Sequelize.STRING,
              allowNull: false
          },
          productPrice: {
              type: Sequelize.DOUBLE,
              allowNull: false
          },
          productDescription: {
              type: Sequelize.TEXT,
              allowNull: false
          },
          productComment: {
              type: Sequelize.STRING,
              allowNull: false
          },
          password: {
              type: Sequelize.STRING,
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
        return queryInterface.dropTable('products');
    }
};

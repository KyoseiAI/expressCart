'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', { 
          id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
          },
          userName: {
              type: Sequelize.STRING,
              allowNull: false
          },
          userEmail: {
              type: Sequelize.STRING
          },
          userPassword: {
              type: Sequelize.STRING,
              allowNull: false
          },
          isAdmin: {
              allowNull: false,
              type: Sequelize.BOOLEAN
          },
          isCustomer: {
              allowNull: false,
              type: Sequelize.BOOLEAN
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
      return queryInterface.dropTable('users');
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('customers', { 
          id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
          },
          email: {
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
          lastName: {
              type: Sequelize.STRING,
              allowNull: false
          },
          password: {
              type: Sequelize.STRING,
              allowNull: false
          },
          phone: {
              type: Sequelize.STRING
          },
          cell: {
              type: Sequelize.STRING
          },
          postcode: {
              type: Sequelize.STRING,
              allowNull: false
          },
          country: {
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
      return queryInterface.dropTable('customers');
  }
};

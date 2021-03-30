'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await Promise.all([
      await queryInterface.changeColumn('movies', 'name', {
        type: Sequelize.TEXT,
        allowNull: true,
      }),
      await queryInterface.changeColumn('movies', 'duration', {
        type: Sequelize.TEXT,
        allowNull: true,
      }),
      await queryInterface.changeColumn('movies', 'genre', {
        type: Sequelize.TEXT,
        allowNull: true,
      }),
      await queryInterface.changeColumn('movies', 'rating', {
        type: Sequelize.TEXT,
        allowNull: true,
      }),
      await queryInterface.changeColumn('movies', 'format', {
        type: Sequelize.TEXT,
        allowNull: true,
      }),
      await queryInterface.changeColumn('movies', 'languages', {
        type: Sequelize.TEXT,
        allowNull: true,
      }),
      await queryInterface.changeColumn('movies', 'director', {
        type: Sequelize.TEXT,
        allowNull: true,
      }),
      await queryInterface.changeColumn('movies', 'cast', {
        type: Sequelize.TEXT,
        allowNull: true,
      }),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await Promise.all([
      await queryInterface.changeColumn('movies', 'name', {
        type: Sequelize.STRING,
        allowNull: false,
      }),
      await queryInterface.changeColumn('movies', 'duration', {
        type: Sequelize.STRING,
        allowNull: false,
      }),
      await queryInterface.changeColumn('movies', 'genre', {
        type: Sequelize.STRING,
        allowNull: false,
      }),
      await queryInterface.changeColumn('movies', 'rating', {
        type: Sequelize.STRING,
        allowNull: false,
      }),
      await queryInterface.changeColumn('movies', 'format', {
        type: Sequelize.STRING,
        allowNull: false,
      }),
      await queryInterface.changeColumn('movies', 'languages', {
        type: Sequelize.STRING,
        allowNull: false,
      }),
      await queryInterface.changeColumn('movies', 'director', {
        type: Sequelize.STRING,
        allowNull: false,
      }),
      await queryInterface.changeColumn('movies', 'cast', {
        type: Sequelize.STRING,
        allowNull: false,
      }),
    ]);
  },
};
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('rooms', 'seatsAvailable', {
      type: Sequelize.TEXT,
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('rooms', 'seatsAvailable', {
      type: Sequelize.INTEGER,
      allowNull: true,
    });
  },
};

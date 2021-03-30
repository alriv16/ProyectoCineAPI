'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await Promise.all([await queryInterface.renameColumn('rooms', 'capacity', 'seatsAvailable')]);
  },

  down: async (queryInterface, Sequelize) => {
    return await Promise.all([await queryInterface.renameColumn('rooms', 'seatsAvailable', 'capacity')]);
  },
};
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('schedules', {
        scheduleId: {
            autoIncrement: true,
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
          },
          fk_moviesId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: {
                tableName: 'movies',
              },
              key: 'moviesId',
            },
          },
          createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
          },
          updateAt: {
            type: Sequelize.DATE,
            allowNull: true,
          },
          createdBy: {
            type: Sequelize.INTEGER,
            allowNull: true,
          },
          updatedBy: {
            type: Sequelize.INTEGER,
            allow: true,
          },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('schedules');
  }
};
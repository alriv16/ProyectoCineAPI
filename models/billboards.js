module.exports = function (sequelize, DataTypes){
  const Billboards = sequelize.define(
    'billboards',
    {
      billboardsId: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      fk_roomsId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'rooms',
          },
          key: 'roomsId',
        },
      },
      fk_moviesId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'movies',
          },
          key: 'moviesId',
        },
      },
      ticketsSold: {
        types: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      startTime: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      endTime: {
        type: DataTypes.TIME,
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      createdBy: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      updatedBy: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'billboards',
      schema: 'public',
    },
  );
  return Billboards;
};
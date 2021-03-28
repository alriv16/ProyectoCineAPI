module.exports = function (sequelize, DataTypes) {
  const Seats = sequelize.define(
    'seats',
    {
      seatsId: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      numberOfSeats: {
        type: DataTypes.STRING,
        allowNull: true,
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
      fk_statusesId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'statuses'
          },
          key: 'statusesId',
        },
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
      tableName: 'seats',
      schema: 'public',
    },
  );
  return Seats;
};
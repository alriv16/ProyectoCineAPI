module.exports = function (sequelize, DataTypes) {
  const Rooms = sequelize.define(
    'rooms',
    {
      roomsId: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      typeOfRoom: {
        type: DataTypes.STRING,
        allowNull: false,
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
      tableName: 'rooms',
      schema: 'public',
    }
  );

  Rooms.associate = (models) => {
    Rooms.hasMany(models.seats, {
      foreignKey: 'fk_roomsId',
      as: 'rooms',
    });
    Rooms.hasMany(models.cinemaBranchRooms, {
      foreignKey: 'fk_cinemaBranchRoomsId',
      as: 'cinemaBranchRoom',
    });
  };

  return Rooms;
};

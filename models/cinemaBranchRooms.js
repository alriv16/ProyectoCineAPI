module.exports = function (sequelize, DataTypes) {
  const CinemaBranchRooms = sequelize.define(
    'cinemaBranchRooms',
    {
      cinemaBranchRoomsId: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      fk_cinemaBranceshId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'cinemaBranches',
          },
          key: 'cinemaBranchesId',
        },
      },fk_roomsId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'rooms',
          },
          key: 'roomssId',
        },
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updateAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      createdBy: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      updatedBy: {
        type: DataTypes.INTEGER,
        allow: true,
      },
    },
    {
      sequelize,
      tableName: 'cinemaBranchRooms',
      schema: 'public',
    }
  );

  CinemaBranchRooms.associate = (models) => {
    CinemaBranchRooms.belongsTo(models.cinemaBranches, {
      foreignKey: 'fk_cinemaBranchesId',
      as: 'cinemaBranch',
    });
    CinemaBranchRooms.belongsTo(models.rooms, {
      foreignKey: 'fk_roomsId',
      as: 'room',
    });
  };

  return CinemaBranchRooms;
};

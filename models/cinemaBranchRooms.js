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
  return CinemaBranchRooms;
};

module.exports = function (sequelize, DataTypes) {
  const CinemaBranches = sequelize.define(
    'cinemaBranches',
    {
      cinemaBranchesId: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fk_citiesId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'cities',
          },
          key: 'citiesId',
        },
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      telephone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      numberOfRooms: {
        type: DataTypes.INTEGER,
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
      tableName: 'cinemaBranches',
      schema: 'public',
    }
  );

  CinemaBranches.associate = (models) => {
    CinemaBranches.hasMany(models.cinemaBranchRooms, {
      foreignKey: 'fk_cinemaBranchesId',
      as: 'cinemaBranchRooms',
    });
    CinemaBranches.belongsTo (models.cities, {
      foreignKey: 'fk_citiesId',
      as: 'city',
    });
  };
  
  return CinemaBranches;
};

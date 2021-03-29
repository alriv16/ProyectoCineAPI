module.exports = function (sequelize, DataTypes) {
  const Cities = sequelize.define(
    'cities',
    {
      citiesId: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fk_statesId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'states',
          },
          key: 'statesId',
        },
      },
      active: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
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
    },
    {
      sequelize,
      tableName: 'cities',
      schema: 'public',
    }
  );

  Cities.associate = (models) => {
    Cities.hasMany(models.cinemaBranches, {
      foreignKey: 'fk_citiesId',
      as: 'cinemaBranches',
    });
    Cities.belongsTo(models.states, {
      foreignKey: 'fk_statesId',
      as: 'state',
    });
  };

  return Cities;
};

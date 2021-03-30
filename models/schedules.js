module.exports = function (sequelize, DataTypes) {
    const Schedules = sequelize.define(
      'schedules',
      {
        schedulesId: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        fk_moviesId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: {
              tableName: 'movies',
            },
            key: 'moviessId',
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
        tableName: 'schedules',
        schema: 'public',
      }
    );
  
    Schedules.associate = (models) => {
      Schedules.belongsTo(models, {
        foreignKey: 'fk_moviesId',
        as: 'movie'
      });
    };
  
    return Schedules;
  };
  
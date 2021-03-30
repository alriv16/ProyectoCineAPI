module.exports = function (sequelize, DataTypes) {
  const Movies = sequelize.define(
    'movies',
    {
      moviesId: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      duration: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      genre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rating: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      format: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      languages: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      director: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cast: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      hours: {
        type: DataTypes.TEXT,
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
      cinema: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      seatsAvailable: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'movies',
      schema: 'public',
    },
  );

  Movies.associate = (models) => {
    Movies.hasMany(models.billboards, {
      foreignKey: 'fk_moviesId',
      as: 'billboards',
    });
    Movies.hasMany(models.schedules, {
      foreignKey: 'fk_moviesId',
      as: 'shedules',
    });
    
  };

  return Movies;
};
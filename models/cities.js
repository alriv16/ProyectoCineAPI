
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
      },
  );
  return Cities;
};
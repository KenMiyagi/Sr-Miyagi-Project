const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "procedures",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      includes: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      requirements: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      payment: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};

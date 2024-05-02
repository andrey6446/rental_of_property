const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Rent extends Model {
    static associate({ RentLine, Category }) {
      this.hasMany(RentLine, { foreignKey: 'rentId' });
      this.hasOne(Category, { foreignKey: 'rentId' });
    }
  }
  Rent.init({
    title: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    price: {
      allowNull: false,
      type: DataTypes.DECIMAL(20, 2),
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    images: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    location: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Rent',
  });
  return Rent;
};

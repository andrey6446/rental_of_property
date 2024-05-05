const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate({ Rent }) {
      this.belongsTo(Rent, { foreignKey: 'rentId' });
    }
  }
  Category.init({
    rentId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};

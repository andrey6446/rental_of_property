const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class RentLine extends Model {
    static associate({ User, Rent }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Rent, { foreignKey: 'rentId' });
    }
  }
  RentLine.init({
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    rentId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Rents',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'RentLine',
  });
  return RentLine;
};

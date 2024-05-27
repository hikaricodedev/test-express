'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class siswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  siswa.init({
    nis: DataTypes.STRING,
    nama: DataTypes.STRING,
    kelas: DataTypes.STRING,
    status: DataTypes.INTEGER,
    creator: DataTypes.STRING,
    editor: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'siswa',
  });
  return siswa;
};
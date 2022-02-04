const Sequelize = require('sequelize');

module.exports = class Office_Image extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      office_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      file_name: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      file_directory: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'Office_Image',
      tableName: 'Office_Image',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    db.Office_Image.belongsTo(db.Office_Info, { foreignKey: 'office_id', sourceKey: 'id' });
  }
};
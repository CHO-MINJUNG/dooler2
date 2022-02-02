const Sequelize = require('sequelize');

module.exports = class Office_Info extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      office_title: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      thumbnail: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      user_phone: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      office_location: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      office_content: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      create_time: {
        type: 'TIMESTAMP',
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      views_count: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'Office_Info',
      tableName: 'Office_Info',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    db.Office_Info.hasMany(db.Office_Image, { foreignKey: 'office_id', sourceKey: 'id' });
    db.Office_Info.belongsTo(db.User, { foreignKey: 'user_id', sourceKey: 'id' });
  }
};
const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            email:{
                type: Sequelize.STRING(255),
                allowNull: false,
                unique: true,
            },
            password: {
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            name: {
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            phone: {
                type: Sequelize.STRING(40),
                allowNull: false,
            },
            birth: {
                type: Sequelize.DATE,
                allowNull: false
            },
            create_time: {
                type: 'TIMESTAMP',
                defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
                allowNull: false
            },
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            modelName: 'User',
            tableName: 'User',
            paranoid: false,
            charset:'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db) {
        db.User.hasMany(db.Office_Info, { foreignKey: 'user_id', sourceKey: 'id' });
    }
}
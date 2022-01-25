const Sequelize = require('sequelize');

module.exports = class Office_Info extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            office_info_id:{                   
                type :Sequelize.INTEGER,
                autoIncrement: true,
                allowNull : false,
                primaryKey: true
            },        
            office_title:{
                type: Sequelize.STRING(255),
                primaryKey: true,
                allowNull: false,
            },
            thumbnail: {
                type: Sequelize.BLOB,
                allowNull: true   
            },
            user_name: {
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            user_phone: {
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            office_location: {
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            office_content: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
            create_time:{                   
                type :Sequelize.TIME,
                autoIncrement: true,
                allowNull : false,
            },
            views_count: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },            
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            modelName: 'office_info',
            tableName: 'office_info',
            paranoid: false,
            charset:'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db) {}
}
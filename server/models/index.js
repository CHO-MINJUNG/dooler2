const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const Office_Info  = require('./Office_Info');
const Office_Image = require('./Office_Image');
const User = require('./User');

const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);
db.sequelize = sequelize;

db.Office_Info = Office_Info;
db.Office_Image = Office_Image;
db.User = User;

Office_Info.init(sequelize);
Office_Image.init(sequelize);
User.init(sequelize);

Office_Info.associate(db);
Office_Image.associate(db);
User.associate(db);

module.exports = db;
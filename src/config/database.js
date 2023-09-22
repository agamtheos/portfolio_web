const { Sequelize } = require('sequelize');
const env = require('./env')

module.exports = db = {}

const sequelize = new Sequelize(
    env.mysql.database,
    env.mysql.user,
    env.mysql.password,
    {
        host: env.mysql.host,
        port: env.mysql.port,
        dialect: env.mysql.dialect,
        logging: false,
    }
);

db.sequelize = sequelize;

sequelize
    .authenticate()
    .then(() => console.log('Connected to Mysql DB'))
    .catch((err) => {
        console.error('Error when try to connect DB : ', err.message)
    })
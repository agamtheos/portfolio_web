require('dotenv').config();

const env = {
    port: process.env.PORT || 3000,
    mysql: {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT
    }
}

module.exports = env;
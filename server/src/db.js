require("dotenv").config();
const { Sequelize } = require("sequelize");

const { DB_USER, DB_PASSWORD, DB_HOST, SERVER_URL } = process.env;

/* const sequelize = new Sequelize(SERVER_URL, {
    logging: false,
    native: false,
    dialectOptions: {
      ssl: {
        require: true, // Requiere una conexión SSL/TLS
        rejectUnauthorized: false,
      },
    },
  }); */

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/miyagi`,
  { logging: false, native: false }
);

/* const {

} = sequelize.models;
 */
module.exports = {
  ...sequelize.models,
  conn: sequelize,
};

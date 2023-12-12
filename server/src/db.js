require("dotenv").config();
const { Sequelize } = require("sequelize");
const ProductsModel = require("./Models/products")
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

ProductsModel(sequelize)

const {
products
} = sequelize.models;

module.exports = {
  products,
  ...sequelize.models,
  conn: sequelize,
};

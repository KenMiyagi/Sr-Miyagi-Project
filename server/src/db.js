require("dotenv").config();
const { Sequelize } = require("sequelize");
const ProductsModel = require("./Models/products")
const AdminsModel = require("./Models/admins")
const UsersModel = require("./Models/users")

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
AdminsModel(sequelize)
UsersModel(sequelize)

const {
products,
admin,
user,
} = sequelize.models;

module.exports = {
  products,
  admin,
  user,
  ...sequelize.models,
  conn: sequelize,
};

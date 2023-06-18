const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  dialectOptions: {
    ssl: true && {
      key: undefined,
      cert: undefined,
      ca: undefined,
      capath: undefined,
      cipher: undefined,
      rejectUnauthorized: false,
    },
  },
  // declaring pool is optional
  // pool: {
  //   max: dbConfig.pool.max,
  //   min: dbConfig.pool.min,
  //   acquire: dbConfig.pool.acquire,x
  //   idle: dbConfig.pool.idle
  // }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.product = require("./product.model.js")(sequelize, Sequelize);

module.exports = db;

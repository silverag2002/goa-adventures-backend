import { Sequelize } from "sequelize";

const dbConfig = require("../config/db.config.js");

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
  //   acquire: dbConfig.pool.acquire,
  //   idle: dbConfig.pool.idle
  // }
});

interface DB {
  Sequelize: typeof Sequelize;
  sequelize: Sequelize;
  product: any; // Replace 'any' with the actual type of the product model
}

const db: DB = {
  Sequelize,
  sequelize,
  product: require("./product.model.js")(sequelize, Sequelize),
};

export default db;

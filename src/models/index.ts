import { Sequelize } from "sequelize";

const dbConfig = require("../config/db.config.ts");
const prod = require("./product.model.ts");
const country = require("./country.model.ts");

const DATABASE_CLIENT = "postgres";
const {
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_NAME,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
}: any = process.env;

const sequelize = new Sequelize(
  DATABASE_NAME,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  {
    host: DATABASE_HOST,
    dialect: "postgres",
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
  }
);

sequelize
  .authenticate()
  .then(function (errors) {
    console.log(errors);
    console.log("dbConfig.D", dbConfig.HOST);
  })
  .catch((err) => console.log("Err", err));

interface DB {
  Sequelize: typeof Sequelize;
  sequelize: Sequelize;
  product: any;
  countries: any;
}

const db: DB = {
  Sequelize,
  sequelize,
  product: prod(sequelize, Sequelize),
  countries: country(sequelize, Sequelize),
};

export default db;

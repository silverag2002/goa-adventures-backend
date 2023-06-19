import { Sequelize } from "sequelize";

const dbConfig = require("../config/db.config.ts");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: "postgres",
  dialectOptions: {
    ssl: false && {
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

async function test() {
  const data = await sequelize.authenticate();
  console.log("resul;y", data);
}
try {
  test();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

interface DB {
  Sequelize: typeof Sequelize;
  sequelize: Sequelize;
  product: any; // Replace 'any' with the actual type of the product model
}

const db: DB = {
  Sequelize,
  sequelize,
  product: require("./product.model.ts")(sequelize, Sequelize),
};

export default db;

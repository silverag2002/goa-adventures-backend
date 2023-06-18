// const app = require("./app");
// const config = require("./config/config");

// const Pool = require("pg").Pool;

const db = require("./app/models");
db.sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// sync
db.sequelize.sync();

const express = require("express");
const helmet = require("helmet");

const compression = require("compression");
const cors = require("cors");
const passport = require("passport");
const httpStatus = require("http-status");
require("dotenv").config();
const routes = require("./routes/v1");

const app = express();

// set security HTTP headers

app.set("view engine", "ejs");
app.use(helmet());

app.use(express.urlencoded({ extended: true }));

// app.use("/v1", routes);

// gzip compression
app.use(compression());

// enable cors
app.use(cors());
app.options("*", cors());

// jwt authentication
app.use(passport.initialize());

// v1 api routes
app.use("/v1", routes);
console.log("Routes over");
app.get("/", (req: any, res: any) => {
  console.log("PRocess", process.env.DATABASE_HOST!);
  res.status(200).send({ status: "Ok" });
});

// new: route to users, that runs readAll()

app.listen(process.env.PORT, () => {
  console.log(`Server running at: http://localhost:${process.env.PORT}/`);
});

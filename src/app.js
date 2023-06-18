const express = require("express");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const compression = require("compression");
const cors = require("cors");
const passport = require("passport");
const httpStatus = require("http-status");
require("dotenv").config();
const indianCity = require("./controllers/products.controller");

const app = express();

// set security HTTP headers
app.use(helmet());

// sanitize request data
app.use(mongoSanitize());

// gzip compression
app.use(compression());

// enable cors
app.use(cors());
app.options("*", cors());

// jwt authentication
app.use(passport.initialize());
// passport.use('jwt', jwtStrategy);

const User = require("./User");
// const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send({ message: "endpoint working" });
});

// new: route to users, that runs readAll()
app.get("/users", indianCity.findAll);

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});

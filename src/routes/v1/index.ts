import express from "express";
import productsRoute from "./products.route";
import countriesRoute from "./country.route";

const router = express.Router();

const defaultRoutes = [
  {
    path: "/products",
    route: productsRoute,
  },
  {
    path: "/countries",
    route: countriesRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;

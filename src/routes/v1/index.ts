import express from "express";
import productsRoute from "./products.route";
import countriesRoute from "./country.route";
import stateRoute from "./state.route";
import cityRoute from "./city.route";

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
  {
    path: "/states",
    route: stateRoute,
  },
  {
    path: "/cities",
    route: cityRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;

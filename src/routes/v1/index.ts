import express from "express";
import productsRoute from "./products.route";
import countriesRoute from "./country.route";
import stateRoute from "./state.route";
import cityRoute from "./city.route";
import categoryRoute from "./category.route";
import subCategoryRoute from "./subcategory.route";
import staffRoute from "./staff.route";
import customerRoute from "./customer.route";
import bookingRoute from "./booking.route";

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
  {
    path: "/categories",
    route: categoryRoute,
  },
  {
    path: "/subcategories",
    route: subCategoryRoute,
  },
  {
    path: "/staff",
    route: staffRoute,
  },
  {
    path: "/customer",
    route: customerRoute,
  },
  {
    path: "/booking",
    route: bookingRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;

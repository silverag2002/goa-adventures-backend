import express from "express";
import { productsController } from "../../controllers";
const router = express.Router();

router
  .route("/")
  .get(productsController.findAll)
  .post(productsController.create);

export default router;

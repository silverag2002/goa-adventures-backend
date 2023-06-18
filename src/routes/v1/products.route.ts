import express from "express";
import { productsController } from "../../controllers";
const router = express.Router();
console.log("ROuter", router);

router.route("/products").get(productsController.findAll);

export default router;

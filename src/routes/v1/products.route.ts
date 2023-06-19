import express from "express";
import { productsController } from "../../controllers";
const router = express.Router();

router.route("/").get(productsController.findAll);

export default router;

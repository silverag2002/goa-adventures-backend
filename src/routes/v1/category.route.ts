import express from "express";
import { categoryController } from "../../controllers";
const router = express.Router();

router
  .route("/")
  .get(categoryController.findAll)
  .post(categoryController.create);

export default router;

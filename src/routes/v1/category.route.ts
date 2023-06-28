import express from "express";
import { categoryController } from "../../controllers";
const router = express.Router();

router
  .route("/:state")
  .get(categoryController.findAll)
  .post(categoryController.create);

export default router;

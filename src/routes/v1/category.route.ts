import express from "express";
import { categoryController } from "../../controllers";
const router = express.Router();
const multer = require("multer");
const upload = multer();

router
  .route("/")
  .get(categoryController.findAll)
  .post(
    upload.fields([{ name: "categoryImage", maxCount: 1 }]),
    categoryController.create
  );

export default router;

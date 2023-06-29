import express from "express";
import { subCategoryController } from "../../controllers";
const router = express.Router();
const multer = require("multer");
const upload = multer();

router
  .route("/")
  .get(subCategoryController.findAll)
  .post(
    upload.fields([{ name: "subCategoryImage", maxCount: 1 }]),
    subCategoryController.create
  );

export default router;

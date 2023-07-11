import express from "express";
import { productsController } from "../../controllers";
const router = express.Router();
const multer = require("multer");
const upload = multer();

router
  .route("/")
  .get(productsController.findAll)
  .post(
    upload.fields([
      { name: "featured_image", maxCount: 1 },
      { name: "gallery", maxCount: 2 },
    ]),
    productsController.create
  );

export default router;

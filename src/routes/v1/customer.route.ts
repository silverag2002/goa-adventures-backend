import express from "express";
import { customerController } from "../../controllers";
const router = express.Router();
const multer = require("multer");
const upload = multer();

router
  .route("/")
  .get(customerController.findAll)
  .post(
    upload.fields([{ name: "profile_image", maxCount: 1 }]),
    customerController.create
  );

export default router;

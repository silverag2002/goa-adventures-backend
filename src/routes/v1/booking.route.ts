import express from "express";
import { bookingController } from "../../controllers";
const router = express.Router();
const multer = require("multer");

router.route("/").get(bookingController.findAll).post(bookingController.create);

export default router;

import express from "express";
import { countryController } from "../../controllers";
const router = express.Router();

router.route("/").get(countryController.findAll);

export default router;

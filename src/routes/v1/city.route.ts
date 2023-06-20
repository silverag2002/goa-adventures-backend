import express from "express";
import { cityController } from "../../controllers";
const router = express.Router();

router.route("/:state").get(cityController.findByState);

export default router;

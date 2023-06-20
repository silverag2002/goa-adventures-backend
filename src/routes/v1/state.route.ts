import express from "express";
import { statesController } from "../../controllers";
const router = express.Router();

router.route("/:country").get(statesController.findByCountry);

export default router;

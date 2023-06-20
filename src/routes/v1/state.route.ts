import express from "express";
import { statesController } from "../../controllers";
const router = express.Router();

router.route("/").get(statesController.findAll);

export default router;

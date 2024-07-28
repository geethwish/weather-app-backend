import { Router } from "express";
import { getWeather } from "../controllers/weatherController";
import auth from "../middleware/auth";

const router = Router();

router.get("/", auth, getWeather);

export default router;

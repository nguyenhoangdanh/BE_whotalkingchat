import { Router } from "express";
import { checkUser, generateToken, getAllUsers, onBoarUser } from "../controllers/AuthController.js";

const router = Router();
router.post("/check-user", checkUser);
router.post("/onboard-user", onBoarUser);
router.get("/get-contacts", getAllUsers);
router.get("/generate-token/:userId", generateToken);
export default router;
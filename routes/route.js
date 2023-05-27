import express from "express";
import { getPost } from "../controllers/controller.js";
const router = express.Router();

router.get("/post", getPost);

export default router;

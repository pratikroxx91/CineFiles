import express from "express";
import movieController from "../controllers/movieController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/movies", authMiddleware, movieController.getMovies);
router.post("/movies", authMiddleware, movieController.addMovie);
router.delete("/movies/:id", authMiddleware, movieController.deleteMovie);

export default router;
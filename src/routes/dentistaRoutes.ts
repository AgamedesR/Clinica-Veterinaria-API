import { Router } from "express";

const router = Router();

// Define your routes here, for example:
router.get("/", (req, res) => {
  res.send("Dentista route working!");
});

export default router;
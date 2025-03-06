import { Router } from "express";

import {
  handlePostApplication,
  handleGetAllApplications,
  handleGetOnlyApplication,
} from "../controllers/applicationController";

const router = Router();

router.post("/", handlePostApplication);
router.get("/", handleGetAllApplications);
router.get("/:id", handleGetOnlyApplication);

export default router;

import { Router } from "express";
import { authenticateToken } from "../configs/authMiddleware";
import {
  handleGetJobs,
  handlePostJobs,
  handlePutJobs,
  handleDeleteJobs,
} from "../controllers/jobsController";

const router = Router();

router
  .route("/")
  .get(handleGetJobs)
  .post(authenticateToken, handlePostJobs)
  .put(authenticateToken, handlePutJobs)
  .delete(authenticateToken, handleDeleteJobs);

export default router;

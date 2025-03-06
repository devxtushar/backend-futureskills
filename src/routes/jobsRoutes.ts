import { Router } from "express";

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
  .post(handlePostJobs)
  .put(handlePutJobs)
  .delete(handleDeleteJobs);

export default router;

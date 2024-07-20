import express from "express";
import {
  employerGetAllApplications,
  jobseekerDeleteApplication,
  jobseekerGetAllApplications,
  postApplication,
} from "../controller/applicationController.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();
//posting application for job
router.post("/post", isAuthenticated, postApplication);
//employeer get all applicatioons only employer
router.get("/employer/getall", isAuthenticated, employerGetAllApplications);
// jobseekerGetAllApplications for only jobseeker
router.get("/jobseeker/getall", isAuthenticated, jobseekerGetAllApplications);
// jobseekerDeleteApplication only for jobseeker
router.delete("/delete/:id", isAuthenticated, jobseekerDeleteApplication);
export default router;

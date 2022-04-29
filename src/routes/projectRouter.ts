import { Router } from "express";
import { addProject, getAllProjects } from "../controllers/projectControllers";

const router: Router = Router();

router.post("/add", addProject);
router.get("/all-projects", getAllProjects);

export default router;

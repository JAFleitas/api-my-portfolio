import { Router } from "express";
import { addProject } from "../controllers/projectControllers";

const router: Router = Router();

router.post("/add", addProject);

export default router;

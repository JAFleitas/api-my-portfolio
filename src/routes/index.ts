import { Router } from "express";
import projectRouter from "./projectRouter";

const router: Router = Router();

router.use("/projects", projectRouter);

export default router;

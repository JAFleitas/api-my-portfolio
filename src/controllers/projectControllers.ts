import { Request, Response } from "express";
import { RequestBodyAddProject } from "../interfaces/RequestBodyAddProject";

const { Project } = require("../db");

async function addProject(
  request: RequestBodyAddProject,
  response: Response
): Promise<Response> {
  const {
    name,
    position,
    description,
    apiWebDeployed,
    webDeployed,
    gitLink,
    image,
  } = request.body;
  try {
    if (
      name &&
      position &&
      description &&
      apiWebDeployed &&
      webDeployed &&
      gitLink &&
      image
    ) {
      await Project.create({
        name,
        position,
        description,
        apiWebDeployed,
        webDeployed,
        gitLink,
        image,
      });

      return response.status(201).json({
        message: "The project added successfully!",
      });
    } else {
      return response.status(400).json({ message: "Incomplete fields" });
    }
  } catch (error) {
    return response.status(404).json({ message: error });
  }
}

async function getAllProjects(
  request: Request,
  response: Response
): Promise<Response> {
  let { currentPage } = request.query;
  currentPage = currentPage ?? "1";
  const projectPerPage = 5;
  const allProjects = await Project.findAll();

  try {
    if (allProjects.length > 0) {
      // pagination
      const from: number = projectPerPage * (Number(currentPage) - 1);
      const to: number =
        projectPerPage * (Number(currentPage) - 1) + projectPerPage;
      console.log(from, to, currentPage);

      const projectPaginated = allProjects.slice(from, to);

      const totalPage: number = Math.ceil(allProjects.length / projectPerPage);

      return response.json({ totalPage, projectPaginated });
    } else {
      return response.status(400).json({ message: "No projects loaded" });
    }
  } catch (error) {
    return response.status(404).json({ message: error });
  }
}

export { addProject, getAllProjects };

import { Request, Response } from "express";

const { Project } = require("../db");

async function addProject(
  request: Request,
  response: Response
): Promise<Response> {
  const { name, position, description, apiWebDeployed, webDeployed } =
    request.body;
  try {
    if (name && position && description && apiWebDeployed && webDeployed) {
      await Project.create({
        name,
        position,
        description,
        apiWebDeployed,
        webDeployed,
      });

      return response.json({
        message: "The project added successfully!",
      });
    } else {
      return response.json({ message: "Incomplete fields" });
    }
  } catch (error) {
    return response.json({ message: error });
  }
}

export { addProject };

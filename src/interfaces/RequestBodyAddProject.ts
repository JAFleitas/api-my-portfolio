import { Request } from "express";

interface ProjectProperties {
  name: string;
  position: string;
  description: string;
  apiWebDeployed: string;
  webDeployed: string;
  gitLink: string;
  image: string;
}

export interface RequestBodyAddProject extends Request {
  body: ProjectProperties;
}

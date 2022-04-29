import {
  DataTypes,
  Sequelize,
  Model,
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";

interface ProjectModel
  extends Model<
    InferAttributes<ProjectModel>,
    InferCreationAttributes<ProjectModel>
  > {
  id: CreationOptional<string>;
  name: string;
  position: string;
  description: string;
  webDeployed: string;
  apiWebDeployed: string;
}

export default function (sequelize: Sequelize) {
  sequelize.define<ProjectModel>(
    "Project",
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
      },
      position: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.TEXT,
      },
      webDeployed: {
        type: DataTypes.STRING,
      },
      apiWebDeployed: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );
}

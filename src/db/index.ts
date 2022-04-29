import { Sequelize, Op } from "sequelize";
import dotenv from "dotenv";

// importing Models

import modelProject from "./models/projects";
//importing environment variables
dotenv.config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

/* eslint-disable */
const sequelize: Sequelize =
  process.env.NODE_ENV === "production"
    ? new Sequelize({
        database: DB_NAME,
        dialect: "postgres",
        host: DB_HOST,
        port: 5432,
        username: DB_USER,
        password: DB_PASSWORD,
        pool: {
          max: 3,
          min: 1,
          idle: 10000,
        },
        dialectOptions: {
          ssl: {
            require: true,
            // Ref.: https://github.com/brianc/node-postgres/issues/2009
            rejectUnauthorized: false,
          },
          keepAlive: true,
        },
        ssl: true,
      })
    : new Sequelize(
        `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
        {
          logging: false, // set to console.log to see the raw SQL queries
          native: false, // lets Sequelize know we can use pg-native for ~30% more speed
        }
      );

// initializing Models
modelProject(sequelize);

module.exports = {
  ...sequelize.models,
  sequelize,
  Op,
};

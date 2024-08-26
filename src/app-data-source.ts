import { DataSource } from "typeorm";
import * as dotenv from "dotenv";

dotenv.config();
const entitiesPath =
  process.env.NODE_ENV === "production"
    ? "dist/entity/*.js"
    : "src/entity/*.ts";
export const myDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ["src/entity/*.ts"],
  logging: true,
  synchronize: true,
});

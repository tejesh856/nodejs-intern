import { DataSource } from "typeorm";
import * as dotenv from "dotenv";

dotenv.config();

export const myDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ["src/entity/*.js"],
  logging: true,
  synchronize: true,
});

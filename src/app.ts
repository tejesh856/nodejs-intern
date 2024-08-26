import * as express from "express";
import { myDataSource } from "./app-data-source";
import airports from "./routes/airports";

const app = express();
app.use(express.json());
myDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
    app.use("/api/airports", airports);
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

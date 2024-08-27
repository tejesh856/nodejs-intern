"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app_data_source_1 = require("./app-data-source");
const airports_1 = require("./routes/airports");
const app = express();
app.use(express.json());
app_data_source_1.myDataSource
    .initialize()
    .then(() => {
    console.log("Data Source has been initialized!");
    app.get("/", (req, res) => {
        res.send("Welcome to the Airport API!");
    });
    app.use("/api/airports", airports_1.default);
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
})
    .catch((err) => {
    console.error("Error during Data Source initialization:", err);
});

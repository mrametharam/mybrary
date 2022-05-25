//#region Determine the environment
const APP_ENV = (process.env.APP_ENV || "PROD").toUpperCase();
console.log("AppMode", APP_ENV);

if (APP_ENV === "DEV") {
    // If running in DEV, load the contents of the .env file.
    require("dotenv").config();
}
//#endregion

//#region Load packages
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
//#endregion

//#region Determin the HTTP port to use
// PORTS:
// LocalHost     21000
// UAT           21020
// PROD          21050
const DEFAULT_PORT = 21000;
const PORT = process.env.HTTP_PORT || DEFAULT_PORT;
//#endregion

//#region Configure Express
const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");

app.use(expressLayouts);
app.use(express.static(__dirname + "/publicX"));
//#endregion

//#region Setup the routes
const { mainRouter, mainRoute } = require("./routes/index-route");

app.use(mainRoute, mainRouter);
//#endregion

//#region Setup MongoDb connection
const DB_URL = process.env.DB_URL;
const mongoose = require("mongoose");

mongoose.connect(DB_URL, { useNewUrlParser: true }).catch((err) => {
    console.log("Error connecting to MongoDb", err.message);
});

const db = mongoose.connection;

db.on("error", (err) => {
    console.log("Error", err);
});

db.on("open", () => {
    console.log("Connected to MongoDb");
});
//#endregion

//#region Start listening
app.listen(PORT, () => {
    console.log("Listening on http port " + PORT);
});
//#endregion

//#region Misc stuff
process.on("UncaughtException", (err) => {
    console.log("Unhandled Error!", err);
});
//#endregion
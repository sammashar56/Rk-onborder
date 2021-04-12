"use strict";

import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import chalk from "chalk";
import logs from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import process from "process"
import compression from "compression";
import requestIP from "request-ip";
import config from "./src/config";
import Routes from "./src/helpers/route"



import authApi from "./src/api/auth";
import thrifter from "./src/api/thrifer";

const app = express()

dotenv.config()

app.use(express.static(__dirname, {dotfiles: "allow"}));
app.use(cors());

app.enable("trust proxy");

app.use(requestIP.mw());

mongoose.connect(config.mongo.uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, () => {
    console.log("📀[database]: connected to the database successfully")
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connection.on("open", err => {
    if (err) console.log(chalk.red("Error connecting to database"));
    console.log(chalk.green("connected to databse successfully"));

})

app.use(logs("dev"));

app.use(compression());

app.use(Routes.root, authApi);
app.use(Routes.root, thrifter);


app.set("PORT", process.env.PORT || 3500 )


app.listen(app.get("PORT"), err => {
    if (err) console.log("server stopped due to " + err.message);
    console.log(chalk.green("server is running in PORT "+ app.get("PORT")));

});

module.exports = app;
const ejs = require("ejs");
require("dotenv/config");
const express = require("express");
const expressejs = require("express-ejs-layouts");
const path = require("path");
const cookieParser = require("cookie-parser");
const voteRoutes = require("./routes/vote.routes");

class App {
  constructor() {
    this.app = express();
    this.initializeApp();
  }

  initializeApp() {
    this.app.use(expressejs);
    this.app.use(cookieParser());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

    this.app.use(express.static(path.join(__dirname, "../public")));
    this.app.set("view engine", "ejs");

    this.app.set("views", path.join(__dirname, "views"));

    this.app.use("/", voteRoutes);
  }
  getApp() {
    return this.app;
  }
}

module.exports = new App().getApp();

const express = require("express");
const voteController = require("../controller/vote.controller");

class Vote {
  constructor() {
    this.router = express.Router();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post("/", voteController.sendCode);
    this.router.post("/admin/delete", voteController.delete);
    this.router.get("/", voteController.home);
    this.router.get("/admin", voteController.codes);
  }

  getRouter() {
    return this.router;
  }
}

module.exports = new Vote().getRouter();

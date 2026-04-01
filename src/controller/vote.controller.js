const voteModel = require("../models/vote.model");

class Vote {
  async home(req, res) {
    return res.render("home");
  }
  async sendCode(req, res) {
    let { email, code } = req.body;

    try {
      let results = await voteModel.create({ email, code });

      res.json({ success: true });
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = new Vote();

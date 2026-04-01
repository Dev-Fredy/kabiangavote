const db = require("../config/db");
const voteModel = require("../models/vote.model");

class Vote {
  async home(req, res) {
    return res.render("home");
  }
  async codes(req, res) {
    let [results] = await db.execute("select * from student");

    res.render("admin", {
      results,
    });
  }

  async delete(req, res) {
    let { id } = req.body;

    let results = await voteModel.delete(id);

    res.json({ success: true });
  }

  async sendCode(req, res) {
    let { email, code } = req.body;

    const validEmail = req.body.email.trim().toLowerCase();

    if (!validEmail.endsWith("@students.kabianga.ac.ke")) {
      return res
        .status(400)
        .json({ success: "Only student emails are allowed" });
    }

    try {
      let results = await voteModel.create({ email, code });

      res.json({ success: "Redirecting ..." });
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = new Vote();

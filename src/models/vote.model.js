const db = require("../config/db");

class Vote {
  async create({ email, code }) {
    let query = `insert into student (email, code) values (?, ?)`;

    let [results] = await db.query(query, [email, code]);

    return results;
  }

  async delete(id) {
    let query = `delete from student where id = ?`;

    let [results] = await db.execute(query, [id]);

    return results;
  }
}

module.exports = new Vote();

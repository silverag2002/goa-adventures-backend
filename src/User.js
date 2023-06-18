const database = require("./database");

const User = {
  async readAll(req, res) {
    try {
      console.log("Weclome");
      const readAllQuery = "SELECT * FROM bookings";

      const { rows } = await database.query(readAllQuery);
      console.log("Rows ", rows);
      return res.send({ rows });
    } catch (error) {
      return res.send(error);
    }
  },
};

module.exports = User;

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "1Fungi99",
  database: "parties_db"
});

module.exports = connection;

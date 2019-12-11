var mysql = require("mysql");

var query = process.argv[2];
var term = process.argv.splice(3).join(" ");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "1Fungi99",
  database: "playlist_db"
});


//   readData();

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    selectData();
  });
  

function readData() {
  console.log("Retrieving data... \nPlease wait...");
  connection.query("select * from songs", function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}

function selectData() {
  console.log("Retrieving data based on " + term);
  if (query === "artist") {
    connection.query(
      "SELECT * FROM songs where ?",
      {
          artist: term
      },
      function(err, res) {
          if (err) throw err;
        console.log(res);
      }
    );
  }
  connection.end();
}

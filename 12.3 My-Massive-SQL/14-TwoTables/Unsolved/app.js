var mysql = require ('mysql');

var term = process.argv.slice(2).join(' ');

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "1Fungi99",
    database: "topsongs"
  });

  connection.connect(function(err) {
      if (err) throw err;
      
  }
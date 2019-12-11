var mysql = require("mysql");
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
    console.log("connected as id " + connection.threadId + "\n");

    connection.query("SELECT * FROM songlist where ?",
    [
    {
        artist: term
    }
  ], function (err, res){
    if (err) throw err;
    console.log('Songs in top 5000 with ' + term);

    console.log("---------------------")

    for (var i =0;i<res.length;i++){
      console.log("Title: "+res[i].title);
      console.log("Rank: "+res[i].id +' with Score: ' + res[i].raw_total);
      console.log("---------------------")
    }
  }
  );
    

    connection.end()
  });

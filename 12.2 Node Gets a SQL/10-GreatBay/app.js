var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "1Fungi99",
  database: "greatbaydb"
});

inquirer
  .prompt([
    {
      type: "list",
      message: "What would you like to do?",
      choices: ["Post an item", "Bid on an item", "View all items"],
      name: "userAction",
      filter: function(val) {
        return val.toLowerCase();
      }
    }
  ])
  .then(function(res) {
    if (res.userAction === "post an item") {
      create();
    }
    if (res.userAction == "bid on an item") {
      bidItems();
    }
    if (res.userAction == "view all items") {
      view();
    }
  });

//Functions
function bidItems() {
  var itemArray = [];
  connection.query("SELECT * FROM items", function(err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      itemArray.push(res[i].title);
    }
    console.log(itemArray);
    connection.end();
  });

//   inquirer.prompt([
//     {
//       type: "list",
//       name: "bidChoice",
//       message: "Which Item would you like to bid on?",
//       choices: newArray,
//       filter: function(val) {
//         return val;
//       }
//     }
//   ]).then,
//     function(err, res) {
//       if (err) throw err;

//       connection.end();
//     };
}
//=======================================================================
function view() {
  connection.query("SELECT * FROM items", function(err, result) {
    if (err) throw err;
    for (var i = 0; i < result.length; i++) {
      console.log("-----------------------");
      console.log("Item:   " + result[i].title);
      console.log("Price: $" + result[i].price);
    }
    console.log("-----------------------");
    connection.end();
  });
}
//=======================================================================
function create() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of the product?",
        name: "product",
        filter: function(val) {
          return val;
        }
      },
      {
        type: "input",
        message: "What is the price?",
        name: "price",
        validate: function(value) {
          var valid = !isNaN(parseFloat(value));
          return valid || "Please enter a number";
        }
      }
    ])
    .then(function(res) {
      console.log("Item posted!");
      console.log("Item:   " + res.product);
      console.log("Price:  $" + res.price);
      connection.query(
        "INSERT INTO items SET ?",
        { title: res.product, price: res.price },
        function(err, res) {
          if (err) throw err;
          console.log(res.affectedRows + " product inserted!");
          view();
        }
      );
    });
}
//=======================================================================

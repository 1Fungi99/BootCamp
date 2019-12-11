// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
  connection.query("select * from chirpy"), function(err, res){
    if (err) throw err;
    for (var i = 0; i < res.length;i++){
      console.log(res[i]);
    }

  }


  // Add a chirp


};

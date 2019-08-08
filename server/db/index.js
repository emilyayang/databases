var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database : 'chat'
});

con.connect(function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected!");
  }
});

module.exports.con = con;

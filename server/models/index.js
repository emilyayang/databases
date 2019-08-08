var con = require('../db');
//https://www.codementor.io/julieisip/learn-rest-api-using-express-js-and-mysql-db-ldflyx8g2
module.exports = {
  messages: {
    get: function (callback) {
      console.log("in get")
      con.query("SELECT * FROM messages", (err, result) => {
        if (err) {
          callback(err);
        } else {
          console.log('got messages!' + result);
          callback(null, result);
        }
      })
    }, // a function which produces all the messages
    post: function (message, callback) {
      con.query(`INSERT INTO messages (id, username, textMessage, roomname) VALUES (${message[id]}, ${message[username]}, ${message[textMessage]}, ${message[roomname]})`, (err, result) => {
        if (err) {
          callback(err);
        } else {
          console.log('posted message!' + result);
          callback(null, result.insertId)
        }
      })
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      con.query("SELECT * FROM users", (err, result) => {
        if (err) {
          callback(err);
        } else {
          console.log('got users!');
          callback(null, result);
        }
      })
    },
    post: function (user, callback) {
      con.query(`INSERT INTO users (allMessages, id, username) VALUES (${null}, ${user[id]}, ${user[username]})`, (err, result) => {
        if (err) {
          callback(err);
        } else {
          console.log('added user!' + result);
          callback(null, result.insertId);
        }
      })
    }
  }
};


var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      con.query("SELECT * FROM messages", (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('success!');
        }
      })
    }, // a function which produces all the messages
    post: function () {

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};


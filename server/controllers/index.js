var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, result) => {
        if (err) {
          res.send(err);
        }
        console.log('res', result);
        res.send(result);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // models.messages.post((err, result)  => {
      //   if (err) {
      //     res.send(err);
      //   }
      //   console.log('res', result);
      //   res.json(result);
      // });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      // models.users.get((err, result)  => {
      //   if (err) {
      //     res.send(err);
      //   }
      //   console.log('res', result);
      //   res.send(result);
      // });
    },
    post: function (req, res) {
      // models.users.post((err, result) => {
      //   if (err) {
      //     res.send(err);
      //   }
      //   console.log('res', result);
      //   res.json(result);
      // });
    }
  }
};


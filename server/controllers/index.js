var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(err, task) {
        if (err) {
          res.send(err);
        }
        console.log('res', task);
        res.send(task);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(err, task) {
        if (err) {
          res.send(err);
        }
        console.log('res', task);
        res.json(task);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(err, task) {
        if (err) {
          res.send(err);
        }
        console.log('res', task);
        res.send(task);
      });
    },
    post: function (req, res) {
      models.users.post(err, task) {
        if (err) {
          res.send(err);
        }
        console.log('res', task);
        res.json(task);
      });
    }
  }
};


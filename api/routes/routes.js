'use strict'
module.exports = function(app) {
  var controller = require("../controllers/controller");

  // Todo Routes
  app.route("/tasks")
    .get(controller.all)
    .post(controller.store);

  app.route("/tasks/:id")
    .get(controller.show)
    .put(controller.update)
    .delete(controller.delete);

  app.route('*')
    .get((req, res) => {
      res.status(404).send({ error: `Whoops! ${req.originalUrl} not found` });
    });
}
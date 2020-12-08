var mongoose = require('mongoose'),
  Task = mongoose.model('Task');

exports.all = (req, res) => {
  Task.find({}, (err, task) => {
    if (err) res.send(err);
    res.json(task);
  });
}

exports.store = (req, res) => {
  var newTask = new Task(req.body);
  newTask.save((err, task) => {
    if (err) res.send(err);
    res.json(task);
  })
}

exports.show = (req, res) => {
  Task.findById(req.params.id, (err, task) => {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.update = (req, res) => {
  Task.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, task) => {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.delete = (req, res) => {
  Task.remove({
    _id: req.params.id
  }, (err, task) => {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};
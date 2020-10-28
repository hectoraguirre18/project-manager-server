const async = require('async');
const bcrypt = require('bcrypt');
const Column = require('../models/column');

function list(req, res, next) {
  const page = req.params.page ? req.params.page : 1;
  Column.paginate({}, {
    page: page,
    limit: 100
  }).then(columns => res.status(200).json({
    message: res.__('column.findAll.ok'),
    objs: columns
  })).catch(error => res.status(500).json({
    message: res.__('column.findAll.err'),
    obj: error
  }));
}

function index(req, res) {
  let id = req.params.id;
  Column.findOne({ _id: id }).then(column => res.status(200).json({
    message: res.__('column.findOne.ok'),
    objs: column
  })).catch(error => res.status(500).json({
    message: res.__('column.findOne.err'),
    obj: error
  }));
}

function create(req, res) {
  let column = new Column({
    _name: req.body.name,
    _projectId: req.body.projectId
  });

  column.save().then(column => res.status(200).json({
    message: res.__('column.create.ok'),
    objs: column
  })).catch(error => res.status(500).json({
    message: res.__('column.create.err'),
    obj: error
  }));
}

function update(req, res) {
  let id = req.params.id;

  let column = new Object();

  if (req.body.name)
    column._name = req.body.name;
  if (req.body.projectId)
    column._projectId = req.body.projectId;

  Column.findOneAndUpdate(
    {_id: id},
    column
  ).then(column => res.status(200).json({
    message: res.__('column.update.ok'),
    objs: column
  })).catch(error => res.status(500).json({
    message: res.__('column.update.err'),
    obj: error
  }));
}

function destroy(req, res) {
  const id = req.params.id;
  Column.deleteOne({ _id: id }).then(column => res.status(200).json({
    message: res.__('column.delete.ok'),
    objs: column
  })).catch(error => res.status(500).json({
    message: res.__('column.delete.err'),
    obj: error
  }));
}

module.exports = {
  list,
  index,
  create,
  update,
  destroy
}
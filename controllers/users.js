const async = require('async');
const bcrypt = require('bcrypt');
const User = require('../models/user');

function list(req, res, next) {
  const page = req.params.page ? req.params.page : 1;
  User.paginate({}, {
    page: page,
    limit: 100
  }).then(users => res.status(200).json({
    message: res.__('user.findAll.ok'),
    objs: users
  })).catch(error => res.status(500).json({
    message: res.__('user.findAll.err'),
    obj: error
  }));
}

function index(req, res) {
  let id = req.params.id;
  User.findOne({ _id: id }).then(user => res.status(200).json({
    message: res.__('user.findOne.ok'),
    objs: user
  })).catch(error => res.status(500).json({
    message: res.__('user.findOne.err'),
    obj: error
  }));
}

function update(req, res) {
  let id = req.params.id;

  let user = new Object();

  if (req.body.name)
    user._name = req.body.name;
  if (req.body.birthdate)
    user._birthdate = req.body.birthdate;
  if (req.body.curp)
    user._curp = req.body.curp;
  if (req.body.rfc)
    user._rfc = req.body.rfc;
  if (req.body.address)
    user._address = req.body.address;
  if (req.body.email)
    user._email = req.body.email;
  if (req.body.password)
    user._password = req.body.password;

  User.findOneAndUpdate({ _id: id }, user).then(user => res.status(200).json({
    message: res.__('user.update.ok'),
    objs: user
  })).catch(error => res.status(500).json({
    message: res.__('user.update.err'),
    obj: error
  }));
}

function destroy(req, res) {
  const id = req.params.id;
  User.deleteOne({ _id: id }).then(user => res.status(200).json({
    message: res.__('user.delete.ok'),
    objs: user
  })).catch(error => res.status(500).json({
    message: res.__('user.delete.err'),
    obj: error
  }));
}

module.exports = {
  list,
  index,
  update,
  destroy
}
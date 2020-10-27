const async = require('async');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const jwtKey = '8a6d7797d70e0a0580a8de35859d53f6';

function signup(req, res) {
  async.parallel({
    salt: (callback) => {
      bcrypt.genSalt(10, callback);
    }
  }, (err, result) => {
    bcrypt.hash(req.body.password, result.salt, (err, hash) => {
      let user = new User({
        _name: req.body.name,
        _birthdate: req.body.birthdate,
        _curp: req.body.curp,
        _rfc: req.body.rfc,
        _address: req.body.address,
        _email: req.body.email,
        _password: hash,
        _salt: result.salt
      });

      user.save().then(user => res.status(200).json({
        message: 'Usuario registrado correctamente',
        objs: user
      })).catch(error => res.status(500).json({
        message: 'No se pudo registrar el usuario',
        obj: error
      }));
    });
  });
}

function login(req, res) {
  const email = req.body.email;
  const password = req.body.password;
  async.parallel({
    user: callback => User.findOne({ _email: email })
      .select('_password _salt')
      .exec(callback)
  }, (err, result) => {
    if (result.user) {
      bcrypt.hash(password, result.user.salt, (err, hash) => {
        if (hash === result.user.password) {
          res.status(200).json({
            message: "Login exitoso",
            objs: jwt.sign(result.user.id, jwtKey)
          });
        } else {
          res.status(403).json({ message: 'Password incorrecto' });
        }
      });
    } else {
      res.status(403).json({ message: 'Usuario incorrecto' });
    }
  });
}

module.exports = {
  signup,
  login
}
const User = require('../models/user');

function list(req, res, next){
    User.find().then(users => res.status(200).json({
        message: 'Usuarios encontrados correctamente',
        objs: users
    })).catch(error => res.status(500).json({
        message: 'No se pudieron encontrar los usuarios',
        obj: error
    }));
}

function index(req, res){
    let id = req.params.id;
    User.findOne({_id: id}).then(user => res.status(200).json({
        message: 'Usuario encontrado correctamente',
        objs: user
    })).catch(error => res.status(500).json({
        message: 'No se pudo encontrar el usuario',
        obj: error
    }));
}

function create(req, res){
    let user = new User({
        _name: req.body.name,
        _birthdate: req.body.birthdate,
        _curp: req.body.curp,
        _rfc: req.body.rfc,
        _address: req.body.address,
        _email: req.body.email,
        _password: req.body.password,
    });

    user.save().then(user => res.status(200).json({
        message: 'Usuario creado correctamente',
        objs: user
    })).catch(error => res.status(500).json({
        message: 'No se pudo almacenar el usuario',
        obj: error
    }));
}

function update(req, res){
    let id = req.params.id;

    let user = new Object();

    if(req.body.name)
        user._name = req.body.name;
    if(req.body.birthdate)
        user._birthdate = req.body.birthdate;
    if(req.body.curp)
        user._curp = req.body.curp;
    if(req.body.rfc)
        user._rfc = req.body.rfc;
    if(req.body.address)
        user._address = req.body.address;
    if(req.body.email)
        user._email = req.body.email;
    if(req.body.password)
        user._password = req.body.password;

    User.findOneAndUpdate({_id: id}, user, {omitUndefined: true}).then(user => res.status(200).json({
        message: 'Usuario actualizado correctamente',
        objs: user
    })).catch(error => res.status(500).json({
        message: 'No se pudo actualizar el usuario',
        obj: error
    }));
}

function destroy(req, res){
    const id = req.params.id;
    User.deleteOne({_id: id}).then(user => res.status(200).json({
        message: 'Usuario eliminado correctamente',
        objs: user
    })).catch(error => res.status(500).json({
        message: 'No se pudo eliminado el usuario',
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
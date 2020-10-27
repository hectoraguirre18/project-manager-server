const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const schema = mongoose.Schema({
    _name: String,
    _birthdate: Date,
    _curp: String,
    _rfc: String,
    _address: String,
    _email: String,
    _password: String,
});

class User {

    constructor(name, birthdate, curp, rfc, address, email, password) {
        this._name      = name;
        this._birthdate = birthdate;
        this._curp      = curp;
        this._rfc       = rfc;
        this._address   = address;
        this._email     = email;
        this._password  = password;
    }

    get name() {
        return this._name;
    }

    set name(v) {
        this._name = v;
    }

    get birthdate() {
        return this._birthdate;
    }

    set birthdate(v) {
        this._birthdate = v;
    }

    get curp() {
        return this._curp;
    }

    set curp(v) {
        this._curp = v;
    }

    get rfc() {
        return this._rfc;
    }

    set rfc(v) {
        this._rfc = v;
    }

    get address() {
        return this._address;
    }

    set address(v) {
        this._address = v;
    }

    get email() {
        return this._email;
    }

    set email(v) {
        this._email = v;
    }

    get password() {
        return this._password;
    }

    set password(v) {
        this._password = v;
    }
}

schema.plugin(mongoosePaginate);
schema.loadClass(User);
module.exports = mongoose.model('User', schema);
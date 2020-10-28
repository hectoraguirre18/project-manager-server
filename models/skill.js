const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _description: String,
    _rank: String,
});

class Skill {

    constructor(description, rank) {
        this._description = description;
        this._rank = rank;
    }

    get description() {
        return this._description;
    }

    set description(v) {
        this._description = v;
    }

    get rank() {
        return this._rank;
    }

    set rank(v) {
        this._rank = v;
    }
}

schema.loadClass(Skill);
module.exports = schema;
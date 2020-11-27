const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const projects = require('../controllers/projects');
const user = require('./user');

const schema = mongoose.Schema({
    _proyectName: String,
    _requestDate : Date,
    _startDate : Date,
    _proyectDescription : String,
    _managerId : mongoose.Types.ObjectId,
    _ownerId : mongoose.Types.ObjectId,
    _teamIds : [mongoose.Types.ObjectId]
});

class Project{

    constructor(proyectName, requestDate, startDate, proyectDescription, managerId, ownerId, teamIds){
        this._proyectName = proyectName;
        this._requestDate = requestDate;
        this._startDate = startDate;
        this._proyectDescription = proyectDescription;
        this._ownerId = ownerId;
        this._managerId = managerId;
        this._teamIds = teamIds;
    }
    get proyectName() {
        return this._proyectName;
    }

    set proyectName(v) {
        this._proyectName = v;
    }

    get requestDate() {
        return this.__requestDate;
    }

    set requestDate(v) {
        this.__requestDate = v;
    }

    get startDate() {
        return this._startDate;
    }

    set startDate(v) {
        this._startDate = v;
    }

    get proyectDescription() {
        return this._proyectDescription;
    }

    set proyectDescription(v) {
        this._proyectDescription = v;
    }
    
    get ownerId() {
        return this._ownerId;
    }

    set ownerId(v) {
        this._ownerId = v;
    }

    get managerId() {
        return this._managerId;
    }

    set managerId(v) {
        this._managerId = v;
    }

    get teamIds() {
        return this._teamIds;
    }

    set teamIds(v) {
        this._teamIds = v;
    }
}


schema.plugin(mongoosePaginate);
schema.loadClass(Project);
module.exports = mongoose.model('Project', schema);

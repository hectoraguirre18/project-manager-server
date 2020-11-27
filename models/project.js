const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const projects = require('../controllers/projects');
const user = require('./user');

const schema = mongoose.Schema({
    _projectName: String,
    _requestDate : Date,
    _startDate : Date,
    _projectDescription : String,
    _managerId : mongoose.Types.ObjectId,
    _ownerId : mongoose.Types.ObjectId,
    _teamIds : [mongoose.Types.ObjectId]
});

class Project{

    constructor(projectName, requestDate, startDate, projectDescription, managerId, ownerId, teamIds){
        this._projectName = projectName;
        this._requestDate = requestDate;
        this._startDate = startDate;
        this._projectDescription = projectDescription;
        this._ownerId = ownerId;
        this._managerId = managerId;
        this._teamIds = teamIds;
    }
    get projectName() {
        return this._projectName;
    }

    set projectName(v) {
        this._projectName = v;
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

    get projectDescription() {
        return this._projectDescription;
    }

    set projectDescription(v) {
        this._projectDescription = v;
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

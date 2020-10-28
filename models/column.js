const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const schema = mongoose.Schema({
  _name: String,
  _projectId: mongoose.Types.ObjectId,
});

class Column {

  constructor(name, projectId) {
    this._name = name;
    this._projectId = projectId;
  }

  get name() {
    return this._name;
  }

  set name(v) {
    this._name = v;
  }

  get projectId() {
    return this._projectId;
  }

  set projectId(v) {
    this._projectId = v;
  }
}

schema.plugin(mongoosePaginate);
schema.loadClass(Column);
module.exports = mongoose.model('Column', schema);
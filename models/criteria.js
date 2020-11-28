const mongoose = require('mongoose');

const schema = mongoose.Schema({
  _event: String,
  _result: String,
});

class Criteria {
    
  constructor(event, result) {
    this._event = event;
    this._result = result;
  }

  get event() {
    return this._event;
  }

  set event(v) {
    this._event = v;
  }

  get result() {
    return this._result;
  }

  set result(v) {
    this._result = v;
  }
}

schema.loadClass(Criteria);
module.exports = schema;
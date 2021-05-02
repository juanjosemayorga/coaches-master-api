const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  name: {
    type: String,
    require: [true, 'The name is mandatory']
  },
  email: {
    type: String,
    require: [true, 'The email is mandatory']
  },
  password: {
    type: String,
    require: [true, 'The password is mandatory']
  },
  status: {
    type: boolean,
    default: true
  },
  google: {
    type: boolean,
    default: false
  },
});

module.exports = model('User', UserSchema);
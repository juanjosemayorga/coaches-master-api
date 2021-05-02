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
    type: Boolean,
    default: true
  },
  google: {
    type: Boolean,
    default: false
  },
});

UserSchema.methods.toJSON = function() {
  const { __v, password, _id, ...user } = this.toObject();
  user.uid = _id;

  return user;
}

module.exports = model('User', UserSchema);
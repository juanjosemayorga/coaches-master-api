const User = require('../models/user');

const emailAlreadyExist = async (email = '') => {

  const alreadyExist = await User.findOne({ email });
  if(alreadyExist) {
    throw new Error(`Your email ${email} is already registered`);
  }

}

module.exports = {
  emailAlreadyExist
}
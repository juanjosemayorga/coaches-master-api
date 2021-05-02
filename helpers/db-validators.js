const User = require('../models/user');

const emailAlreadyExist = async (email = '') => {

  const alreadyExist = await User.findOne({ email });
  if(alreadyExist) {
    throw new Error(`Your email ${email} is already registered`);
  }

}

const existUserById = async (id) => {

  const userExist = await User.findById(id);
  if (!userExist) {
    throw new Error(`The ID: ${id} doesn't exist`);
  }

}

module.exports = {
  emailAlreadyExist,
  existUserById,
}
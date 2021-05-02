const { response } = require("express");
const User = require('../models/user');
const bcryptjs = require('bcryptjs');

const userGet = async (req, res = response) => {

  const { id } = req.params;
  const user = await User.findById(id)

  res.json(user);
}

const userPost = async (req, res = response) => {

  const { name, email, password } = req.body;
  const user = new User({ name, email, password });

  // Encrypt the password
  const salt = bcryptjs.genSaltSync();
  user.password = bcryptjs.hashSync(password, salt);

  // Save the data on the DB
  await user.save();

  res.json({
    message: 'POST SUCCESFULL',
    user
  });
}

module.exports = {
  userGet,
  userPost
}
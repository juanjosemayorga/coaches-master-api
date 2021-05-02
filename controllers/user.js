const { response } = require("express");
const Usuario = require('../models/user');
const bcryptjs = require('bcryptjs');

const userGet = (req, res = response) => {
  res.json({
    message: 'GET SUCCESFULL'
  });
}

const userPost = async (req, res = response) => {

  const { name, email, password } = req.body;
  const user = new Usuario({ name, email, password });

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
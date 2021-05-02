const { response } = require("express");
const User = require('../models/user');
const bcryptjs = require('bcryptjs');
const { validationResult } = require("express-validator");

const userGet = (req, res = response) => {
  res.json({
    message: 'GET SUCCESFULL'
  });
}

const userPost = async (req, res = response) => {

  const { name, email, password } = req.body;
  const user = new User({ name, email, password });

  // Check if the email already exists
  const alreadyExist = await User.findOne({ email });
    if(alreadyExist) {
      return res.status(400).json({
        message: 'Email already exists'
      });
    }

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
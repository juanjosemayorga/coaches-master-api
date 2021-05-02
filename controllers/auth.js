const { response } = require("express");
const User = require('../models/user');
const bcryptjs = require('bcryptjs');

const login = async (req, res = response) => {

  const { email, password } = req.body;

  try {

    // Verify is email exists
    const user = await User.findOne({ email })
    if(!user) {
      return res.status(400).json({
        message: 'Email or Password incorrect'
      });
    }

    // If user is active
    if(!user.status) {
      return res.status(400).json({
        message: 'Email or Password incorrect'
      });
    }

    // Verify the password
    const validPassword = bcryptjs.compareSync(password, user.password);
    if(!validPassword) {
      return res.status(400).json({
        message: 'Email or Password incorrect'
      });
    }

    // Generate JWT
    res.json({
      message: 'Login OK'
    });

  } catch (error) {

    console.log(error);
    res.status(500).json({
      message: 'Talk to admin'
    });

  }

}

module.exports = {
  login
}
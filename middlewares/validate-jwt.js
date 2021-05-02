const { response, request } = require("express");
const jwt = require('jsonwebtoken');

const User = require('../models/user');

const validateJWT = async (req = request, res = response, next) => {

  const token = req.header('authorization');

  if (!token) {
    return res.status(401).json({
      message: "There is no token in request"
    })
  }

  try {

    const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

    // Reading the user corresponding uid
    const user = await User.findById(uid);

    if (!user.status) {
      return res.status(401).json({
        message: 'Invalid User'})
    }

    req.user = user;

    next();

  } catch (error) {

    console.log(error);
    res.status(401).json({
      message: "Invalid Token"
    });

    console.log(token);

    next();

  }

}

module.exports = {
  validateJWT
}
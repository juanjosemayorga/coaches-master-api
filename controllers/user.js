const { response } = require("express");

const userGet = (req, res = response) => {
  res.json({
    message: 'GET SUCCESFULL'
  });
}

const userPost = (req, res = response) => {
  res.json({
    message: 'POST SUCCESFULL'
  });
}

module.exports = {
  userGet,
  userPost
}
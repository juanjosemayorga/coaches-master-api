const { response } = require("express");

const userGet = (req, res = response) => {
  res.json({
    message: 'GET SUCCESFULL'
  });
}

const userPost = (req, res = response) => {

  const { name } = req.body;

  res.json({
    message: 'POST SUCCESFULL',
    name
  });
}

module.exports = {
  userGet,
  userPost
}
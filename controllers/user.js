const { response } = require("express");
const Usuario = require('../models/user');

const userGet = (req, res = response) => {
  res.json({
    message: 'GET SUCCESFULL'
  });
}

const userPost = async (req, res = response) => {

  const body = req.body;
  const usuario = new Usuario(body);

  await usuario.save();

  res.json({
    message: 'POST SUCCESFULL',
    usuario
  });
}

module.exports = {
  userGet,
  userPost
}
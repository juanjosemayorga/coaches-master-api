const { Router } = require("express");
const { check } = require("express-validator");
const { userGet, userPost } = require("../controllers/user");

const router = Router();

router.get('/', userGet);
router.post('/', [
  check('name', 'The name is mandatory').not().isEmpty(),
  check('password', 'The password must have more than 6 characters').isLength({ min: 6 }),
  check('email', 'The email is invalid').isEmail()
],userPost);

module.exports = router;
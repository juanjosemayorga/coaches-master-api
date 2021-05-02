const { Router } = require("express");
const { check } = require("express-validator");
const { userGet, userPost } = require("../controllers/user");
const { emailAlreadyExist, existUserById } = require("../helpers/db-validators");
const { validateFields } = require("../middlewares/validate-fields");
const { validateJWT } = require("../middlewares/validate-jwt");

const router = Router();

router.get('/:id', [
  validateJWT,
  check('id', 'Is not a valid ID').isMongoId(),
  check('id').custom(existUserById),
  validateFields
],userGet);
router.post('/', [
  check('name', 'The name is mandatory').not().isEmpty(),
  check('password', 'The password must have more than 6 characters').isLength({ min: 6 }),
  check('email', 'The email is invalid').isEmail(),
  check('email', 'Your email is already registered').custom(emailAlreadyExist),
  validateFields
],userPost);

module.exports = router;
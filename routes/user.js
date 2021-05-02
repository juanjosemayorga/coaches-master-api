const { Router } = require("express");
const { userGet, userPost } = require("../controllers/user");

const router = Router();

router.get('/', userGet);
router.post('/', userPost);

module.exports = router;
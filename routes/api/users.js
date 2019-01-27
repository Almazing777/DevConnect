const express = require("express");
const router = express.Router();

// /test refer to api/users/test
// @route GET api/users/test
// @desc Tests users route
// @access Public

router.get("/test", (req, res) => res.json({ msg: "Users work" }));

module.exports = router;

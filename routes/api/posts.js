const express = require("express");
const router = express.Router();

// /test refer to api/users/test
// @route GET api/posts/test
// @desc Tests post route
// @access Public

router.get("/test", (req, res) => res.json({ msg: "Posts work" }));

module.exports = router;

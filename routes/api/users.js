const express = require("express");
const router = express.Router();

// /test refer to api/users/test
router.get("/test", (req, res) => res.json());

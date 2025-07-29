
const express = require("express");
const router = express.Router();

const bfhlControllers = require("../controllers/api.controllers")

router.post("/",bfhlControllers)

module.exports = router
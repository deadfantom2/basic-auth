const express = require('express');
const { login } = require('../controller/users.controller');
const router = express.Router();

router.post('/authenticate', login);

module.exports = router;

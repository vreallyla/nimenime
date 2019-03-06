const express = require('express');
const router = express.Router();

// get controller
const userController = require('../../controllers/userController');

//validation
const userValidator = require('../../validation/userValidator');

//set route at /v1/*
router.post('/register', [userValidator.register],userController.register);
router.post('/login', [userValidator.login], userController.login);

module.exports = router;
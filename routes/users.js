var express = require('express');
var router = express.Router();
var authController = require('../controllers/auth')

// Pointing references towards authController methods

router.post('/signup', authController.signup_post);
router.post('/login', authController.login_post);
router.get('/logout', authController.logout_get);

module.exports = router;

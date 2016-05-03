var express = require('express');
var router = express.Router();

/* GET users listing. */
router.use('/flashcards', require('./flashcards'))

module.exports = router;

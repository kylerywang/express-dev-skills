var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills');

/* GET home page. */
router.get('/', skillsCtrl.index)


module.exports = router;

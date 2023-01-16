var express = require('express');
const skills = require('../controllers/skills');
var router = express.Router();
const skillsCtrl = require('../controllers/skills');

/* GET home page. */
router.get('/', skillsCtrl.index)
router.get('/new',skillsCtrl.new)
router.post('/',skillsCtrl.create)

module.exports = router;

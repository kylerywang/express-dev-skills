var express = require('express');
const skills = require('../controllers/skills');
var router = express.Router();
const skillsCtrl = require('../controllers/skills');

/* GET home page. */
router.get('/', skillsCtrl.index)
router.get('/new',skillsCtrl.new)
router.get('/:id',skillsCtrl.show)
router.post('/',skillsCtrl.create)
router.delete('/:id', skillsCtrl.delete)

module.exports = router;

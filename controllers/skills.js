const Skill = require('../models/skill')

module.exports = {
    index,
    new:newSkill
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        title: 'All Skills'
    });
}

function newSkill(req,res) {
    res.render('skills/new', {
        title: 'New Skill'
    });
}
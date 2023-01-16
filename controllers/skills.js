const Skill = require('../models/skill')

module.exports = {
    index,
    new:newSkill,
    create
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

function create(req,res){
    console.log(req.body)
    Skill.create(req.body)
    res.redirect('/skills');
}
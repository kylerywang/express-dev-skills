const skills = [
    {id: 16, skill: "Soccer", rating: 7},
    {id:8, skill: "Public Speaking", rating:6},
    {id:123, skill: "Writing", rating:7}
]

module.exports ={
    skills,
    getAll,
    create
}

function getAll() {
    return skills;
}

function create(skill){
    skill.id = Date.now() % 1000000
    skill.rating = 5
    skills.push(skill)
}
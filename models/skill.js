const skills = [
    {id: 16, skill: "Soccer", rating: 7},
    {id:8, skill: "Public Speaking", rating:6},
    {id:123, skill: "Writing", rating:7}
]

module.exports ={
    skills,
    getAll,
    getOne,
    deleteOne,
    create
}

function getAll() {
    return skills;
}

function create(skill){
    skill.id = Date.now() % 1000000
    skills.push(skill)
}

function getOne(id){
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}

function deleteOne(id){
    id = parseInt(id)
    const idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx, 1)
}
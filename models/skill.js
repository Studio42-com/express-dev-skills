const skills = [
  { id: 123456, skill: "Social Distance Parking", done: true },
  { id: 234567, skill: "Meeting Avoidance", done: false },
  { id: 345678, skill: "Water Retention", done: false },
  { id: 456789, skill: "Hide and Seek", done: false },
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne
};

function getAll() {
  return skills;
}

function getOne(id) {
  return skills.find((skill) => skill.id == id);
}

function create(skillObj) {
  // Add the id
  skillObj.id = Math.floor(Math.random() * 1000000);
  // New skill wouldn't be done :)
  skillObj.done = false;
  skills.push(skillObj);
}

function deleteOne(id) {
  // Find the index based on the id of the todo object
  const idx = skills.findIndex(skill => skill.id === parseInt(id));
  skills.splice(idx, 1);
  //res.redirect('/skills')
}
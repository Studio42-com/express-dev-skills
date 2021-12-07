const skills = [
  {id: 'Skill1', skill: "Throat Punching", done: true },
  {id: 'Skeel2', skill: "Keyboard Smashing", done: false },
  {id: 'Skillz3', skill: "Water Retention", done: false },
  {id: 'Skill4', skill: "Hide and Seek", done: false }
];

// We need to require to Skill model
const Skill = require('../models/skill');

module.exports = {
  getAll,
  index,
  getOne,
  create
};

function getAll() {
  return skills;
}

function getOne(id) {
  // URL params are strings - convert to a number
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
}

function index(req, res) {
  let skills = Skill.getAll();
  res.render('skills/index', {
    skills
  });
}

function create(skill) {
  // Add the id
  skillObj.id = Math.floor(Math.random() * 1000000);
  // New skill wouldn't be done :)
  skillObj.done = false;
  skills.push(skillObj);
}

// const todos = [
//     {id: 125223, todo: 'Feed Dogs', done: true},
//     {id: 127904, todo: 'Learn Express', done: false},
//     {id: 139608, todo: 'Buy Milk', done: false}
//   ];
  
//   // We need to require to Todo model
// const Skill = require('../models/skill');

//   module.exports = {
//     getAll, index
//   };
  
//   function getAll() {
//     return skills;
//   }

//   function index(req, res) {
//     let todos = Todo.getAll();
//     res.render('todos/index', {
//       todos
//     });
//   }
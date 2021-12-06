const skills = [
  {id: 'Skill1', skill: "Throat Punching", done: true},
  {id: 'Skeel2', skill: "Keyboard Smashing", done: false},
  {id: 'Skillz3', skill: "Water Retention", done: false},
  {id: 'Skill4', skill: "Hide and Seek", done: false}
];

module.exports = {
  getAll: function() {
    return skills;
  }
};

// const todos = [
//     {skill: 'Typing', status: "pathetic"},
//     {skill: 'Attention to details', status: "what details?"},
//     {todo: 'Mad Skillz', status: "Very Angry"}
//   ];
  
//   module.exports = {
//     getAll: function() {
//       return skills;
//     }
//   };
 // routes/skills.js
 var express = require('express');
 var router = express.Router();

 // Require the controller that exports Skills CRUD functions
 var skillsCtrl = require('../controllers/skills');

 // All actual paths begin with "/skills"

 // GET /skills - index Route
 router.get('/', skillsCtrl.index);
 //Get /skills/new
 router.get('/new', skillsCtrl.new);
 // GET /"skills/:id" - Show Route
 router.get('/:id', skillsCtrl.show);
 // POST /"skills" - create Route
 router.post('/', skillsCtrl.create);
 //DELETE "/.skills/:id" - Delete Route
 router.delete('/:id', skillsCtrl.delete);
 
 module.exports = router;

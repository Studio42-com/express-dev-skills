 // routes/skills.js

 var express = require('express');
 var router = express.Router();

 /*-- Delete the next lines: 
// GET users listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
 End Deletions --*/

 // Require the controller that exports Skills CRUD functions
 var skillsCtrl = require('../controllers/skills');

 // All actual paths begin with "/skills"

 // GET /skills - index Route
 router.get('/', skillsCtrl.index);
 //Get /skills/new
 router.get('/', skillsCtrl.index);
 router.get('/new', skillsCtrl.new);
 router.get('/:id', skillsCtrl.show);
 router.post('/', skillsCtrl.create);
 router.delete('/:id', skillsCtrl.delete);
 
 module.exports = router;

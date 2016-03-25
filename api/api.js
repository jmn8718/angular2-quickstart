var express = require('express');
var router = express.Router();

var heroes = [
  { "id": 11, "name": "Mr. Nice" },
  { "id": 12, "name": "Narco" },
  { "id": 13, "name": "Bombasto" },
  { "id": 14, "name": "Celeritas" },
  { "id": 15, "name": "Magneta" },
  { "id": 16, "name": "RubberMan" },
  { "id": 17, "name": "Dynama" },
  { "id": 18, "name": "Dr IQ" },
  { "id": 19, "name": "Magma" },
  { "id": 20, "name": "Tornado" }
];

function getId(){
  var lastId = heroes[heroes.length-1]['id'];
  // console.log('Last id:' + lastId);
  return lastId+1;
}
router.get('/heroes', function(req, res, next) {
  res.json({data : heroes});
});

router.post('/heroes', function(req, res, next) {
  // console.log(req.body)
  var newHero = req.body;
  newHero['id'] = getId();
  // console.log('New Hero: ',newHero);
  heroes.push(newHero)
  res.json({data : newHero});
});

module.exports = router;

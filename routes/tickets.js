var express = require('express');
var router = express.Router();



/* GET users listing. */


router.get('/', function(req, res, next) {
  res.render('usuario')
});

router.post('/',async function(req, res, next) {
  console.log(req.body)
  await ticket.crearTicket(req.body)
  res.render('clarinetes')
});

router.get('/registros',async function(req, res, next) {
 
  
  res.json({})
});

module.exports = router;

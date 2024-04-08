var express = require('express');
var router = express.Router();

var {estatus}=require('../db/models')

/* GET users listing. */
router.get('/', async function(req, res, next) {
  let a=await estatus.findAll()
  res.json(a);
});

router.get('/:id',function(req,res,next){
  res.json({soyPajero:req.params.id}).status(200)
})

module.exports = router;

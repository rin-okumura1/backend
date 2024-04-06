var express = require('express');
var router = express.Router();
var orden= require("../repo/ordenes")


/* GET users listing. */
router.get('/', async function(req, res, next) {
  let a=await orden.traerOrdenes()
  res.json(a);
});

router.get('/:id',function(req,res,next){
  res.json({soyPajero:req.params.id}).status(200)
})

module.exports = router;

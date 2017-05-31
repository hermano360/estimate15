var express = require('express');
var bodyParser = require('body-parser');
var products = require('./api/products.js');
var twilioText = require('./api/twilioText.js')

//Create out app

var app = express();
const PORT = process.env.PORT || 3000;

//making sure traffic is through http, if not converting to http because
// openWeatherMap doesn't work with https
app.use(function(req,res,next){
  if(req.headers['x-forwarded-proto']==='https'){
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
})
app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/modelNo/:modelNo', function(req,res,next){
  products.getModelNo(req.params.modelNo,function(docs){
    res.json(docs)
  });
});

app.get('/allProducts', function(req,res,next){
  products.allProducts(function(docs){
    res.json(docs)
  });
});

app.post('/modelNos', function(req,res,next){
  products.getModelNos(req.body.modelNos,function(docs){
    res.json(docs);
  })
})

app.listen(PORT,function(){
  console.log('Express server is listening on ' + PORT);
});

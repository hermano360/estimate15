var express = require('express');
var bodyParser = require('body-parser');
var products = require('./api/products.js');
var twilioText = require('./api/twilioText.js');
var pdf = require('html-pdf');

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



app.use(express.static(__dirname + '/public'));

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

app.post('/pdfTest', function(req,res,next){
  var options = { format: 'Letter',  "header": {
    "height": "45mm",
    "contents": '<div style="text-align: center;">Author: Marc Bachmann</div>'
  }, "footer": {
    "height": "28mm",
    "contents": {
      // first: '1',
      // 2: '2', // Any page number is working. 1-based index
      // 3: '3', 
      // 4: '4', 
      default: '<span style="color: #444;">Page {{page}}</span>'
    },  "border": {
    "top": "2in",            // default is 0, units: mm, cm, in, px
    "right": "1in",
    "bottom": "2in",
    "left": "1.5in"
  }}} ;
  pdf.create(req.body.html,options).toFile('./testFile.pdf',function(err, res){
    console.log(res);
    next()
  });

})
app.use(express.static('public'));

app.listen(PORT,function(){
  console.log('Express server is listening on ' + PORT);
});

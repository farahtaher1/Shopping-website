
var express = require('express');
var path = require('path');
var app = express();
//array for the item in the cart
var mycart =[];
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

var cart=[];
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function(req,res){
  res.render('login');
});
app.get('/cart',function(req,res){
  res.render('cart');
});

app.get('/leaves',function(req,res){
  res.render('leaves');
});
app.get('/iphone',function(req,res){
  res.render('iphone');
});


app.listen(3000);

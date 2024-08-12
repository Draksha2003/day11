var express= require('Express')
var app=express.Router();
var things=require('./express3.js')
app.use('/balaji',things);
app.listner(3000);

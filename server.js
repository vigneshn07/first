var express = require('express');
var app=express();
var add=require('./module.js');

console.log("sum of 2 and 4 is",add.sumfunction(2,4));
app.get('/',function(req,res){
    res.sendFile('index.html',{root:__dirname});
})


app.listen(3000);
console.log('Server is live on 3000');

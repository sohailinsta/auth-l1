const express = require("express");
const https = require("https");
const request = require("request");
const bodyParser = require('body-parser')
const ejs = require('ejs');
const mongoose = require("mongoose");
const app = express();
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect("mongodb://localhost:27017/userDB");

app.get("/", function(req,res){
res.render("home");
})
app.post("/",function(req,res){

})

app.get("/work", function(req,res){  
  res.render("list", {title: "work", newitem: workitems})
  })

app.listen(9000,function(){
  console.log("port is listening on 9000");
});
const { json, urlencoded } = require("express");
const express = require("express");

const port = 3000;

const server = express();

server.use(json());
server.use(urlencoded({extended:true}));


server.get('/' , (req,res)=>{
    res.setHeader("content-Type" , "text/html")
    res.sendFile(__dirname + '/index.html')
})


server.get('validate.js' , (req,res)=>{
    res.sendFile(__dirname+'validate.js');
})
server.get('style.css' , (req,res)=>{
    res.sendFile(__dirname+'style.css');
})





server.get('/welcome' , (req,res)=>{
    const firstName = req.query.firstName;
    const lastName = req.query.lastName;
    const city = req.query.city;
    console.log(`firstName : ${firstName} , lastName : ${lastName} , city : ${city}`);
    res.sendFile(__dirname+'/welcome.html');
})


server.listen(port,(req,res)=>{
    console.log("Server running");
})
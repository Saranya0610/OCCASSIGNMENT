const express=require('express');
const server=express();
const port=3000;
// '/'->default page/ home page
server.get('/',(req,resp)=>{
    resp.setHeader("Content-Type","text/html")
    resp.sendFile(__dirname+'/index.html');
});
// '/welcome'->url path using GET
server.get('/welcome',(req,resp)=>{
    const firstName=req.query.firstName;
    console.log("GET First Name :"+firstName);
    const lastName=req.query.lastName;
    console.log("GET Last Name :"+lastName);
    const city=req.query.city;
    console.log("GET City Name :"+city);
    resp.setHeader("Content-Type","text/html")
    resp.sendFile(__dirname+'/welcome.html');
});
//share the css file
server.get('/css/style.css',(req,resp)=>{
        resp.sendFile(__dirname+'/style.css');
});
server.listen(port,()=>{
    console.log(`http://localhost:${port} started `);
});

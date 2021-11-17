const express=require('express');
const server=express();
const port=3000;
// '/'->default page/ home page
server.get('/',(req,resp)=>{
    resp.setHeader("Content-Type","text/html")
    resp.sendFile(__dirname+'/index.html');
});

//share the css file
server.get('/style.css',(req,resp)=>{
        resp.sendFile(__dirname+'/style.css');
});

// '/welcome'->url path using POST
server.post('/welcome',(req,resp)=>{
    const firstName=req.body.firstName;
    console.log("POST First Name :"+firstName);
    const lastName=req.body.lastName;
    console.log("POST Last Name :"+lastName);
    const city=req.body.city;
    console.log("POST City Name :"+city);
    resp.setHeader("Content-Type","text/html")
    resp.sendFile(__dirname+'/welcome.html');
});


server.listen(port,()=>{
    console.log(`http://localhost:${port} started `);
});

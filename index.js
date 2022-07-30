const express = require('express');
const app =express();
const PORT = process.env.PORT||8000

app.get('/',(req,res)=>{

let http= require('http');
const fs= require('fs');
const server=http.createServer((req,res)=>{
let date = new Date()

fs.writeFile(',/current-date-Line.txt', `${date}`,(err)=>{
    if (err)
    console.log(err)
})

fs.readFile('./current-date-time.txt',(err,data)=>{
    if(err)
    console.log(err)
    res.writeHeaad(200,{'Content-Type':'text/html'});
    res.end(data)
})
})
})
server.listen(PORT,()=>console.log('Server Listene to port'+PORT))
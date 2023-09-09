const express = require('express')
const app = express()
const port = 3000
const mainjs = require("./main.js")

app.use("/main",mainjs);

app.get('/',(req,res)=>{
    res.send('Hello world :) <3')
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})
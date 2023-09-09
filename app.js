const express = require('express')
const app = express()
const port = 3000
const mainjs = require("./routes/main")

var bodyParser = require("body-parser");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send('Hello world :) <3')
})

app.use("/main",mainjs);

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})
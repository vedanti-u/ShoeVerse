var express = require('express');
var app = express();

var router = express.Router();
const sql = require("./server.js");
//console.log(sql);

app.get('/',async (req,res)=>{
    try{
        const {data,error} = await sql.from("shoes").select();
        console.log(data);
        return res.send(data);
    }
    catch(error){
        return res.send({error});
    }
})

module.exports = router;
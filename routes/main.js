var express = require('express');

var router = express.Router();
const sql = require("../server");
console.log("this is in main route-->")
console.log(sql)
const { createClient } = require('@supabase/supabase-js');


router.get('/', async (req, res) => {
    try {
      console.log(" Supabase query==>");
      const { data: Shoes, error } = await sql.from('Shoes').select('*')
    
      console.log("Data:", Shoes);
      if (error) {
        console.log("Error:", error);
        return res.status(500).send({ error });
      }
      return res.send(Shoes);
    } catch (error) {
      console.log("Catch block error:", error);
      return res.status(500).send({ error });
    }
  });
  

  router.get('/:id', async (req, res) => {
    try {
      console.log(" Supabase query==>");
      const { data: Shoes, error } = await sql.from('Shoes').select('*').eq('shoe_id', req.params.id)


      console.log("Data:", Shoes);
      if (error) {
        console.log("Error:", error);
        return res.status(500).send({ error });
      }
      return res.send(Shoes);
    } catch (error) {
      console.log("Catch block error:", error);
      return res.status(500).send({ error });
    }
  });
  
  //post

  router.post("/",async(req,res)=>{
    const fetchdata =[
        req.body.shoe_id,
        req.body.model,
        req.body.size,
        req.body.color,
        req.body.price,
        req.body.brand
    ];
    console.log(JSON.stringify(fetchdata,null, 2));
    try{
        const { data, error } = await sql.from('Shoes')
        .insert([{ 
            shoe_id :req.body.shoe_id,
            model: req.body.model,
            size:req.body.size,
            color:req.body.size,
            price:req.body.price,
            brand:req.body.brand},]).select()
        if(error){
            console.log("Error while inserting",error);
            return res.status(500).send({error});
        }

        return res.send("data added successfully"+JSON.stringify(data,null, 2));
    }
    catch(error){
        console.log("Catch block error:", error);
        return res.status(500).send({error});
    }
  })
module.exports = router;
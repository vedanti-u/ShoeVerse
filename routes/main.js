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
  
module.exports = router;
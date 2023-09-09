var express = require('express');
var app = express();

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY 
//const supabase = createClient(supabaseUrl,supabaseKey)

const supabase = createClient('https://sinfgqxrfvvaxurdedzt.supabase.co','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpbmZncXhyZnZ2YXh1cmRlZHp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQyNDYyMjYsImV4cCI6MjAwOTgyMjIyNn0.YcO3PJLPttcBkQzriaQqNk18b5z5et7siW_5kYSVmNk', {
    auth: { persistSession: false },
  });

// app.listen(3000,()=>{
//     console.log('Server starting..')
// })
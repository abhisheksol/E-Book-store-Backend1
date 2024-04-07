const express = require('express');
const app=express()
require('dotenv').config();
const mongoose = require('mongoose');
const routes = require('./routes/book_routes');

const cors = require('cors');
app.use(express.json()); 
app.use(cors()) 
const port = process.env.PORT || 5000;

mongoose.connect(process.env.mongo_url).then(()=>{
    console.log("connected to db");
})
app.use(routes)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
   
 
// CkhsGUGdOyYdntTk
// abhisheksolapure2003
// mongodb+srv://abhisheksolapure2003:<password>@cluster0.nketawd.mongodb.net/?retryWrites=true&w=majority
// mongodb+srv://abhisheksolapure2003:<password>@cluster0.nketawd.mongodb.net/?retryWrites=true&w=majority 
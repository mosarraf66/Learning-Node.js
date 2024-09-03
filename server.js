const express = require('express');
const db = require('./db');
const app = express();

const bodyParser = require ('body-parser');
app.use(bodyParser.json()); // req body

const Person = require('./models/Person');
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

// POST route to add a person
app.post('/person', async (req, res)=>{
    
  try {
          const data =req.body // asumming the request body contains the person data
        
          //create a new person document using monoose model
          const newPerson = new Person(data);
        
          //save the new person to the database
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
  } catch (err) {
        console.log(err);
        res.status(500).json({error: 'Internal server Error'});
  }
 
})


app.listen(3000 , ()=>{
    console.log("server is listening on port 3000")
})
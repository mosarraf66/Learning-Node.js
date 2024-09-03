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
app.post('/person', (req, res)=>{
    
  const data =req.body // asumming the request body contains the person data
  
  //create a new person document using monoose model
  const newPerson = newPerson(data);

  //save the new person to the database
  newPerson.save((error, savedPerson)=>{
    if(error){
      console.log('error saving person:' , error);
      res.status(500).json({error: 'Internal server error'})
    }else{
      console.log('data saved successfully');
      res.status(200).json(savedPerson);
    }
  })
})


app.listen(3000 , ()=>{
    console.log("server is listening on port 3000")
})
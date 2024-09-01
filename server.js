const express = require('express')
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World')
})


app.get('/chicken',(req, res) =>{
    res.send('chicken briyani is ready')
})

app.get('/biryani',(req, res) =>{
    var menu = {
        "name" : "chicken biryani half - 120",
        "fullplate" : 120,
        "hotel name" : "biryani king"
    }
    
    res.send(menu)
})

app.listen(3000 , ()=>{
    console.log("server is listening on port 3000")
})
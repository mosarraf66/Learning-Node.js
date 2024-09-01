const mongoose = require('mongoose');

// defining the mongo db connection url
const mongoURL = 'mongodb://localhost:27017/hotels'

// Setup mongodb connection
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//get the defualt connection
//mongoose maintains a default connection object representing the mongodb connection.
const db = mongoose.connection;

//define event listener for database connection
db.on('connected', ()=>{
    console.log('connected to MongoDB server');
});

db.on('error', (err)=>{
    console.log('MongoDB connection error:', err);
});

db.on('disconnected', ()=>{
    console.log('MongoDB disconnected');
});

//export the database connection
module.exports = db;
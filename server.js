const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json()); //use .json(), not .urlencoded()
app.use(express.static('public'));

const venuesController = require('./controllers/venues.js');
app.use('/venues', venuesController);


mongoose.connect('mongodb://localhost:27017/venues', { useNewUrlParser: true });
mongoose.connection.once('open', ()=>{
    console.log('connected to mongoose...');
});

app.listen(3000, ()=>{
    console.log('listening...');
});

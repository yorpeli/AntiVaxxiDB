const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./Models/user');
require('./Services/passport');


mongoose.connect(keys.mongoURI, 
{ useNewUrlParser: true }).catch((e)=>{
    console.log(e);
});
mongoose.connection.on('error', err => {
    console.log(err);
  });

// mongoose.connection.once('open', ()=>{
//     console.log('Connection Open');
//     console.log("connection ",mongoose.connection.readyState);
// });

const app = express();

require('./Routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
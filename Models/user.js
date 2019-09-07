const mongoose = require('mongoose');
const { Schema }  = mongoose;

const userSchema = new Schema ({
    googleID: String,
    firstName: String, 
    lastName: String,
    email: String,
    image: String
});

mongoose.model('users', userSchema);


const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// CHANGE TO
const passportLocalMongoose = require("passport-local-mongoose").default;

// now we are not adding the username and password in the user schema 
// because the passport-local-mongoose will automatically add the username and password to our user schema 
// and also it will hash the password and salt the password and store it in the database 
// so we don't have to worry about that
const userSchema = new Schema({
    email : {
        type : String,
        required : true,
    }
})

// our Hashing algo is pbkdf2 and our salt length is 16 and our hash length is 64 


// =================================Extra Notes=================================`
// and passport-local-mongoose will alo add some features regarding authentication to our user schema 
// like it will add the authenticate method to our user model which we can use to authenticate the user 
// and it will also add the serializeUser and deserializeUser methods to our user model which we can use 
// to serialize and deserialize the user for storing in the session and also it will add the register method 
// to our user model which we can use to register a new user in our database and 
// it will also add the findByUsername method to our user model which we can use to find a user by their username 
// in our database and it will also add the changePassword method to our user model which we can use to change the password 
// of a user in our database and it will also add the setPassword method to our user model 
// which we can use to set the password of a user in our database \
// and it will also add the validPassword method to our user model which we can use to check 
// if the password is valid or not for a user in our database


userSchema.plugin(passportLocalMongoose); // here we are adding the passport-local-mongoose plugin to our user schema

module.exports = mongoose.model("User", userSchema); // here we are exporting the user model so that 
// we can use in other files as well
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users'); 

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret:keys.googleClientSecret,
        callbackURL:'/auth/google/callback'
    }, (accessToken, refreshToken, profile, done)=>{
        User.findOne({googleID: profile.id})
            .then((existingUser)=>{
                if(existingUser){
                    console.log("User exitsts, Yay!")
                } else {
                    new User ({
                        googleID: profile.id,
                        firstName: profile.name.givenName,
                        lastName: profile.name.familyName,
                        email: profile.emails[0].value,
                        image: profile.photos[0].value
                    }).save((e)=>{
                        if (e){console.log(e)};
                    });
                }
            });
        // console.log(profile.name.givenName);
        // console.log(profile.name.familyName);
        // console.log("saved");
    })
);

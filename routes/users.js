// this si an user route where we will write all the routes related to user like register, login, logout etc

const express = require('express');
const router = express.Router();
const User = require("../modules/user.js"); // here we are importing the user model from the models/user.js file
const wrapAsync = require("../utils/wrapSync.js"); 
const passport = require("passport");
const {saveRedirectUrl} = require("../logIn_middleware.js");

const userController = require("../controllers/users.js");

router.route("/signUp")
.get(userController.renderSignUpForm)
.post(userController.signUp);

// post request sign up route


// now for logIn first we are going to send one get req then one form will com up 
// and then we will send one post req to logIn the user

router.route("/login")
.get(userController.renderLogInForm)
.post(
    saveRedirectUrl,
    passport.authenticate("local", {
        failureRedirect: "/login",
        failureFlash: true
    }) 
     // failureRedirect is used to redirect the user to the login page if the user enter 
     // wrong username or password 
     // failureFlash is used to flash the error message if the user 
     // enter wrong username or password and this error message will be set in the flash
     , userController.logIn)



// post request for logIn route

// logOut route
router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if(err) {
      return next(err);
    }
    req.flash("success", "You have logged out successfully!"); // here we are setting the success flash message
    res.redirect("/listings");
  })
})

module.exports = router;
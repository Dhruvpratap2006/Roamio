const User = require("../modules/user.js");

module.exports.renderSignUpForm =  (req, res) => {
    res.render("users/signUp.ejs");
}

module.exports.signUp = async (req, res, next) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new User({ email, username });
    const registeredUser = await User.register(newUser, password);
    
    req.login(registeredUser, (err) => {
      if (err) return next(err);
      req.flash("success", "Welcome to Roamio!");
      res.redirect("/listings");
    });

  } catch(e) {
    req.flash("error", e.message);
    res.redirect("/signUp");
  }
}

module.exports.renderLogInForm = (req, res) => {
    res.render("users/logIn.ejs");
}

module.exports.logIn = async(req, res) => {
    // now for authentication we need to check this username and password
    // exists in dB or not for this we are going to use the passport middleware 
    // and for this we need to use the passport.authenticate() method which is provided 
    // by the passport middleware 
    req.flash("success", "Welcome back to Roamio!"); // here we are setting the success flash message
    res.redirect(res.locals.redirectUrl || "/listings"); // here we are redirecting the user to the listings page after logIn
}
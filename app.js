

if(process.env.NODE_ENV != "production") {
    require('dotenv').config();
}



const express = require('express');
const app = express();
const mongoose = require('mongoose');

const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']); // fix for Windows SRV DNS resolution bug

const path = require("path");
const methodOveride = require("method-override"); //method-override lets HTML forms send PUT and DELETE requests 
// (since browsers only support GET and POST natively).
const ejsMate = require('ejs-mate');
const wrapAsync = require("./utils/wrapSync.js")
const ExpressError = require("./utils/ExpressErrors.js")

const session = require("express-session");
// now these expression session we do not use when we take our project to production
// as they can leak memory and they are tempoary storage 
// so for that we use connect-mongo which is a MongoDB session store for Express
// and it is used to store session data in a MongoDB database 
// instead of the default in-memory store.
const MongoStore = require('connect-mongo'); 
const flash = require("connect-flash"); // connect-flash is a middleware for storing temporary messages in the session.

const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./modules/user.js"); // here we are importing the user model from the modules/user.js file

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(methodOveride("_method"))
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")))

// =============================Cookies and Flash Messages=============================


const store = MongoStore.create({
    mongoUrl: process.env.ATLAS_DB_URL,
    touchAfter: 24 * 60 * 60
});


store.on("error", (err) => {
    console.log("Session store error", err);
})

const sessionOptions = {
    store,
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true
    }
};



app.use(session(sessionOptions)); // here we are using the session middleware for using the session in our application
// session is a way to store data on the server side for individual users against a unique session ID. 
// This session ID is sent to the client via a cookie and is used to identify the user on subsequent requests. 
// Sessions are commonly used for authentication, storing user preferences, and other data that needs to persist across multiple requests.

// ===============================MIDDLEWARE SETUP===============================
// all middleware must be registered BEFORE routes so that req.body is parsed
// by the time any route handler or router receives the request
app.use(flash()); // here we are using the flash middleware for using the flash messages in our application


// ================================Passport Middleware Setup===============================

// now we are setting up the passport middleware for using the passport in our application
// as we do not want that user onces get logged in and then user switch to another tab 
// then user again has to login again so for that we are using the passport middleware which will keep the user logged in

// ### `app.use(passport.initialize());`
// - Starts Passport in your Express app.
// - Prepares Passport so authentication (login/signup) can work on incoming requests.
// ### `app.use(passport.session());`
// - Connects Passport with Express sessions.
// - Keeps the user logged in across different requests/pages after successful login.
// so for this first we need to initialize the passport middleware
app.use(passport.initialize()); // here we are initializing the passport middleware
app.use(passport.session()); // here we are using the passport session middleware for using the session in our application
passport.use(new LocalStrategy(User.authenticate())); // here we are using the local strategy for authentication 
// and for authentacting all those user in our database we are using the authenticate method 
// \which is provided by the passport-local-mongoose plugin
//  which we have added in our user schema in modules/user.js file
passport.serializeUser(User.serializeUser()); // Serializes user means to store all the info of the user in the session 
passport.deserializeUser(User.deserializeUser()); // Deserializes user means to remove all the info of the user from the session


app.use((req, res, next) => {
    res.locals.success = req.flash("success"); // here we are setting the success flash message 
    // to res.locals.success so that we can use it in our ejs files
    res.locals.error = req.flash("error"); // here we are setting the error flash message 
    // to res.locals.error so that we can use it in our ejs files
    // console.log(res.locals.success);
    // console.log(res.locals.error); 
    res.locals.currUser = req.user; // here we are setting the current user to res.locals.currUser so that we can use it in our ejs files
    next();
})



// ===============================EXPRESS ROUTER===============================
// now with the help of this express router we have pass all the routes of listings in routes/listings.js file 
// and now we can write one single line and use all those routes in app.js file
// which make code easy to read and maintain and 
// also we can easily find the error if there is any error in the code
const listingsRoutes = require("./routes/listings.js"); // here we are importing the listings routes
//  from the routes/listings.js file
// single line which we are using to use all the routes of listings in app.js file
app.use("/listings", listingsRoutes); // here we are using the listings routes for all the routes which starts with /listings

// ===============================EXPRESS ROUTER FOR REVIEWS===============================
const reviewRoutes = require('./routes/reviews.js'); // here we are importing the reviews routes from the routes/reviews.js file
// now single of code which we are using to use all the routes of reviews in app.js file
app.use("/listings/:id/reviews", reviewRoutes); // here we are using the reviews routes for all the routes 
// which starts with /listings/:id/reviews as in review this is the only common part in all the routes of reviews
const userRoute = require("./routes/users.js"); // here we are importing the user routes from the routes/users.js file
app.use("/", userRoute); 


// Ensure ATLAS_DB_URL is correctly picked up from your .env


mongoose.connect(process.env.ATLAS_DB_URL, { family: 4 })
  .then(() => {
      console.log("Connected to MongoDB Atlas successfully! 🎉");
      // App only starts listening AFTER the connection is established
      app.listen(8080, () => {
          console.log("Server running on port 8080");
      });
  })
  .catch(err => {
      console.error("❌ Database connection failed completely:");
      console.error(err.message);
  });



app.get("/", (req, res) => {
    res.redirect("/listings");
});



// privacy page route
app.get("/privacy" , (req, res) => {
    res.render("privacy.ejs")
})

// terms and conditions route
app.get("/terms" , (req, res) => {
    res.render("terms.ejs")
})

// company details conditions
app.get("/company", (req, res) => {
    res.render("company.ejs")
})

app.all("/{*path}", (req, res, next) => {
    next(new ExpressError(404, "Page not found"));
})

app.use((err, req, res, next) => {
    console.log(err);
    // res.render("error.ejs");
    let { status = 500, message = "Something went wrong" } = err;
    res.status(status).render("error.ejs", { message });
})
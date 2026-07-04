// now we are going to use the express router
// so that we can separate our routes in different files and keep our code organized

// require the express router
const express = require('express');
const router = express.Router(); // we are creating a new router object  
const wrapAsync = require("../utils/wrapSync.js")
const ExpressError = require("../utils/ExpressErrors.js")
const { ListingSchema } = require("../schema.js")  
const Listing = require("../modules/listing.js");
const Review = require("../modules/reviews.js");
const Booking = require("../modules/booking.js");
const { isLoggedIn , isOwner , validateListing} = require("../logIn_middleware.js");
const multer  = require('multer')
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage }) // multer is an npm package which is used to store the files in the form 

const listingController = require("../controllers/listings.js");

const rateLimit = require("express-rate-limit"); // for applying some limit of 
// sending req to our AI API KEY

const { createCheckoutSession } = require("../utils/stripeService")

const aiLimiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
  max: 10, // each user can hit this route max 10 times per day
  message: { error: "You've reached today's AI generation limit. Try again tomorrow!" },
  standardHeaders: true,
  legacyHeaders: false,
});


// so we have cut all the routes of listings from app.js and paste it here in this file 
// and we will export this router and use it in app.js

// this is the middleware for validating the listing data using Joi before it reaches Mongoose and MongoDB

// Flow of our image uploding in FOrm 
// in form we upload one photo file then it goes to backend then backend sends this 
// to cloudinary and cloudinary gives one URL which we can store now in our db

router
.route("/")
.get(wrapAsync( listingController.index ))
.post( 
    isLoggedIn, 
    upload.single('listing[image]'),
    validateListing,
    wrapAsync(listingController.createListing)
);


router.get("/new", 
    isLoggedIn, 
    listingController.renderNewForm
)

// ai route for generating listing description using AI
// basically we are sending an post req means sending some data to frontend
// and in this case frontend will return the generated des, title and category 
router.post("/generate-description", isLoggedIn, aiLimiter, wrapAsync(listingController.generateDescription));

// route for ai review analysizes
router.post("/:id/analyze-reviews", aiLimiter, wrapAsync(listingController.analyzeReviews));

router.route("/:id")
.get( 
    wrapAsync(listingController.showListing)
)
.put( 
    isLoggedIn, 
    isOwner, 
    upload.single('listing[image]'),
    validateListing, 
    wrapAsync(listingController.updateListing)
)
.delete( 
    isLoggedIn, 
    isOwner, 
    wrapAsync(listingController.destroyListing)
);

router.post("/:id/reserve", isLoggedIn, wrapAsync(async (req, res) => {
    const listing = await Listing.findById(req.params.id);

    const session = await createCheckoutSession({
        listing,
        successUrl: `${req.protocol}://${req.get("host")}/listings/${listing._id}/booking-success`,
        cancelUrl: `${req.protocol}://${req.get("host")}/listings/${listing._id}`,
    });

    res.redirect(303, session.url);
}));

router.get("/:id/booking-success", isLoggedIn, wrapAsync(async (req, res) => {
    
    const listing = await Listing.findById(req.params.id);

    const booking = await Booking.create({
        listing : listing._id,
        user : req.user._id,
        amountPaid : listing.price,
    });
    
    req.flash("success", `🎉 Payment successful! Booking confirmed for "${listing.title}". The host will contact you shortly.`);
    res.redirect(`/listings/${req.params.id}`);
}));


// ---------------------------Index Route--------------------------------------
// sending an get request to show all the listings


// ----------------------Create Route(Add Listings)---------------------
// basically for creating any new Listings we have to first 
// send one GET Request to  /listings/new here one form will come 
// on which we have to add info of our new Listings
// then we send one POST request to /listings to show our new listings



// ----------------------------Show Route-------------------------------
// show route to print the individual data of each listing




// ---------------UPDATE ROUTE-----------------------------
// to create a update route
//  we need to pass the GET request 
// on /listings/:id/edit then we render one form for editing the listings
// and on /listng/:id we send our PUT request to update the listing

// edit route
router.get("/:id/edit", 
    isLoggedIn, 
    isOwner, 
    wrapAsync(listingController.renderEditForm)
)
    
// Update route
//  we are writing validateListing as a middleware for validating the listing data using Joi wheteher 
// the data which is coming is correct or not before it reaches Mongoose and MongoDB
// and we are writing wrapAsync for handling the error in case of any error occurs in the async function



// Delete Route
// we are writing wrapAsync for handling the error in case of any error occurs in the async function


module.exports = router; // here we are exporting the router so that we can use it in app.js

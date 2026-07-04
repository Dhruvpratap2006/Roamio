// now this route we have make for handling the reviews of the listings and we will use this route in app.js file
const express = require('express');
const router = express.Router( { mergeParams : true } ); // we are creating a new router object
// we are writing mergeParams : true because we want to access the params of the parent route which is //listings/:id/reviews in this
// if we do not write mergeParams : true then we will not be able to access the params of the parent route in this router 
// and we will not be able to get the id of the listing for which we want to give the review or delete the review 
// else we don't do anything with review
// so that we can gave the review to the correct listing and also we can delete the review from the correct listing as well
const wrapAsync = require("../utils/wrapSync.js")
const ExpressError = require("../utils/ExpressErrors.js")
const Listing = require("../modules/listing.js");
const { validateReview, isLoggedIn, isReviewOwner } = require("../logIn_middleware.js");
const Review = require("../modules/reviews.js");

const reviewController = require("../controllers/reviews.js");



// all routes of reviews
// reviews route
// post rote for reviews
// we are writing validateReview as a middleware for validating the review data using Joi wheteher 
// the data which is coming is correct or not before it reaches Mongoose and MongoDB
// and we are writing wrapAsync for handling the error in case of any error occurs in the async function
router.post("/", validateReview, isLoggedIn, wrapAsync(reviewController.createReview));


// review delete route
router.delete("/:reviewId", isReviewOwner, wrapAsync(reviewController.destroyReview))


module.exports = router; // here we are exporting the router object so that we can use it in app.js file
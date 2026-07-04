const Listing = require("./modules/listing");
const Review = require("./modules/reviews.js")
const ExpressError = require("./utils/ExpressErrors.js")
const { reviewSchema } = require("./schema.js")
const { ListingSchema } = require("./schema.js")  

module.exports .isLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl;//
        // if user is not logged in then we will flash the error message
        // and redirect the user to the login page because
        //  only logged in user can create a listing
        req.flash("error", "You must be logged in to create a listing.");
        return res.redirect("/login");
    }
    next();
}

module.exports.saveRedirectUrl = (req, res, next) => { // this middleware is used to save 
// the redirect url in the session
// redirectUrl means if we want to add the listing then first we will login then prev we are 
// redirecting to /listings but if we see from user side then we want to redirect the 
// user to the page where the user want to go  
// and in this case if user want to add the listing then we want to redirect 
// the user to the add listing page 
// in same way we are not logged in and if we try to 
// edit the listing but when first we want to logged in then we redirect to edit page 
// so for all this functiomality we are going to use this middleware which is 
// saveRedirectUrl and this middleware will save the redirect url 
// in the session and then after logIn we will redirect the user to that url
    if(req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}

// middleware for owner of the listing
// we are writing this middleware for checking whether the user is 
// the owner of the listing or not 
// because only the owner of the listing can edit or delete the listing
module.exports.isOwner = async (req, res, next) => {
    let { id } = req.params;
        let listing = await Listing.findById(id);
    // authorisation part
        if(!listing.owner.equals(res.locals.currUser._id)) {
            req.flash("error", "You don't have permission to do that!");
            return res.redirect(`/listings/${id}`);
        }
        next();
}

module.exports.isReviewOwner = async (req, res, next) => {
    let { id, reviewId } = req.params;
        let review = await Review.findById(reviewId);
    // authorisation part
        if(!review.author.equals(res.locals.currUser._id)) {
            req.flash("error", "You don't have permission to do that!");
            return res.redirect(`/listings/${id}`);
        }
        next();
}

module.exports.validateListing = (req, res, next) => {
    let {error} = ListingSchema.validate(req.body);
    if(error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(404, errMsg)
    } else {
        next()
    }
}

module.exports.validateReview = (req, res, next) => {
    let {error} = reviewSchema.validate(req.body);
    if(error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(404, errMsg)
    } else {
        next()
    }
}
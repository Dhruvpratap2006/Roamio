// =======================================
//         JOI SCHEMA VALIDATION
// =======================================

// What is Joi?
// Joi is a validation library. Before data even touches your database,
// Joi checks if the incoming data is correct.
// Think of it as a "security guard" that sits before Mongoose.

// Flow:
// User submits form
//       ↓             
//    JOI CHECK  ← stops bad data here
//       ↓
//   Mongoose Schema
//       ↓
//    MongoDB

const Joi = require('joi');

// Here we define the Joi validation schema for our Listing
// This checks the shape and type of data BEFORE it reaches Mongoose or MongoDB

module.exports.ListingSchema = Joi.object({

    // The entire request body must contain a "listing" key
    // This matches our form fields like listing[title], listing[price] etc.
    listing: Joi.object({

        title: Joi.string().required(),       // must be a string, compulsory
        description: Joi.string().required(), // must be a string, compulsory
        location: Joi.string().required(),    // must be a string, compulsory
        country: Joi.string().required(),     // must be a string, compulsory
        price: Joi.number().required().min(0),
        // Category Validation Rule: Must be one of your 10 lowercase enum slugs
        category: Joi.string().valid(
            "trending", 
            "beachfront", 
            "mountains", 
            "iconic-cities", 
            "camping", 
            "castles", 
            "tea-trails", 
            "scholars-retreats", 
            "wild-outposts", 
            "high-altitude"
        ).required(),       // must be a number, compulsory but not -ve so min(0)
        image: Joi.object({
            url: Joi.string().allow("", null).optional(),
            filename: Joi.string().allow("", null).optional()
        }).optional() // means our image is not going to compulsary
        // so we are not using any required we are using the allow 
        // means we are going to "" means an empty string means no image
        // and null because if we do not pass anything then our mongoose will 
        // pass an default image
        // handles case where image object itself is missing

    }).required() // the listing object itself is compulsory

});


// now we are creating another server side validation for reviews
// samee with the help of Joi we are going to create the validation for reviews as well

module.exports.reviewSchema = Joi.object({
    review : Joi.object({
        rating : Joi.number().required().min(1).max(5), // rating must be a number between 1 and 5
        comment : Joi.string().required() // comment must be a string and is required
    }).required()
})

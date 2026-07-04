// here we are going to make all our models for our DataBase

// =======================================
//         Roamio - DATABASE MODEL
// =======================================

// We are creating a database model called "Listing"
// A "Listing" is any place that can be rented or booked on our travel website.
// For example: an Apartment, Flat, House, Villa, or Hotel.
// Every place added to our website is called a "Listing".

// Each Listing will store the following information:
// - Title       → The name of the place (e.g., "Cozy Beach House")
// - Description → A short detail about the place
// - Image       → A photo of the place
// - Price       → Cost per night or per stay
// - Location    → The address or area of the place (e.g., "Bali, Indonesia")
// - Country     → The country where the place is located

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Review = require("./reviews.js"); // we are importing the review model here 
// because we are going to reference it in our listing model

// defining the Schema of our model
const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        url : String,
        filename : String,
    },

// Think of set as a filter that runs before saving to DB:
//     User submits image URL
//         ↓
//    set() runs
//         ↓
//   Is it empty ""?
//    ↙          ↘
//  YES            NO
//   ↓              ↓
// use default    use what
//   image        user gave

// Why both default AND set?
// Good question — they handle two different situations:
// Situation Who handles itField is completely missing / nulldefault handles itField is an empty string ""set handles it
// SituationMongoose thinksHandlerField missing/null"Nothing received"defaultField is """Something received, just empty"set()

// Real life analogy:
// Think of ordering food at a restaurant:

// null/missing → you didn't mention drinks at all → waiter brings water by default
// "" → you said "I'll have a..." and then went silent → waiter asks and gives you water anyway

    price: Number,
    location: String,
    country: String,

    // array for reviews
    reviews: [
        {
            type: Schema.Types.ObjectId, // we are going to store the id of the reviews in this array
            // Schema.Types.ObjectId is use to store the id of the reviews which are related to that listing
            ref: "Review" // we are going to reference the Review model for reviews
        }
    ],

    // host or owner of the listing
    owner : {
        type : Schema.Types.ObjectId, // we are going to store the id of the user
        //  who is the owner of the listing
        ref : "User" // we are going to reference the User model for owner
        // as the person should be registered user to add the listing 
        // and only registered user can add the listing
    },

    // now we can make a field for coordinates of map also which is also correct but 
    // instead of this we can use the GeoJson as mapBox also sends the data in format of GeoJson
    // and mongoose has alsoa special property which helps to store geogrphic points 
    // and this is also in the format of geoJson
    // this gives advantage as if we want to do some operation regarding coordinates 
    // then instead of writing code from scratch we can use mongoose library which make easy

    geometry : {
        type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
            required: true
        },
        coordinates: {
            type: [Number], // now coordinates must be an array of two numbers (lat, lon)
            required: true
        }
    },

    category: {
        type: String,
        enum: [
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
        ],
    }

});


// now here we are going to create one mongoose middleware 
// basically when we delete the entire listing then we also want to delete all the reviews which are related to that listing
// as when we delete the listing but all the reviews they do not get deleted 
// and they are still there in the database which is not good for our database 
// and also it will create a lot of junk data in our database

// so for this we are going to create one mongoose middleware which is called post middleware 
// which will run after the delete operation is performed on the listing

listingSchema.post("findOneAndDelete", async (listing) => {
    if(listing) {
        await Review.deleteMany({_id : { $in: listing.reviews } }); // here we are deleting all the reviews 
        // which are related to that listing1
    }
})

// Creating the model
const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
// this is our booking model here we are going to make schema of booking
// and then we will export it to use in other files

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// create a booking
const bookingSchema = new mongoose.Schema({
    listing : {
        type : Schema.Types.ObjectId,
        ref : "Listing",
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User", // this connects each booking to the user who made it
    },
    amountPaid : {
        type : Number,
    },
    status : {
        type : "String",
        enum : ["confirmed", "cancelled"],
        default : "confirmed",
    },
    createdAt : {
        type : Date,
        default : Date.now,
    },
})

module.exports = mongoose.model("Booking", bookingSchema);
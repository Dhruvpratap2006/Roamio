const mongoose = require('mongoose');
const schema = mongoose.Schema;


// this is the review model which will be used to store the reviews of the listings in the database
// defining the Schema of our model
const reviewSchema = new schema({
    comment: String,
    rating : {
        type : Number,                                    
        min : 1,
        max : 5
    },
    createdAt : { // createdAt used to  store the date and time when the review was created
        type : Date,
        default : Date.now() 
    },

    // basically this is for authorization type if user is not registered then he cannot be able to review
    
    author : {
        type : schema.Types.ObjectId,
        ref : "User"
    }
})

module.exports = mongoose.model("Review", reviewSchema); // we are exporting the model
//  so that we can use it in other parts of our application

// now for one listing there can be many reviews 
// so it is one to many relationship

// now for this we are going to make one array and that array we are going to attach with each
// listings and in that array we are going to store 
// the id of the reviews which are related to that listing
// see in listing.js file we have made one array called reviews 
// and in that array we are going to store the id of the reviews which are related to that listing



// IMPORTANT NOTE
// now we are creating the reviews in two parts
// first is that in show.ejs file we are creating one form in which we are going to write the review and leaves rating 
// why show.ejs because we are going to write the review for that particular listing 
// so we are going to write the review in show.ejs file and 
// then we are going to submit that form 
// and the form we are going to submit on route /listing:id/reviews
// because here we are going to have the one to many releationship between listing and reviews
// as for one listing there can be many reviews so we are going to submit the form on route /listing:id/reviews
// and then in that route we are going to create the review and then we are going to push the id of the review in the reviews array of that listing
// and we are not creaating any seperate rourte for reviews as reviews are associated with listing and in that listing we are going to show the reviews and rating 
// so no seperae route
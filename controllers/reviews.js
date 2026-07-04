const Listing = require("../modules/listing");
const Review = require("../modules/reviews");


module.exports.createReview = async (req, res) => {
   // fetch the listing AND actually load full review data (not just IDs)
   // .populate("reviews") converts [id1, id2, id3] into [{comment: "..."}, {comment: "..."}]
   let listing = await Listing.findById(req.params.id).populate("reviews");

   // create a new review document using the data submitted from the form
   let newReview = new Review(req.body.review);

   // attach the logged-in user's ID as the author of this review
   newReview.author = req.user._id;

   // push the new review into this listing's reviews array
   // (this array will now include the new review too, so no need to add it again later)
   listing.reviews.push(newReview);

   // save the review document itself into the Review collection in MongoDB
   await newReview.save();

   
   // save the listing document — this stores both the new review reference
   // AND the updated sentimentLabel/sentimentSummary fields
   await listing.save();

   // show a success message to the user
   req.flash("success", "Review posted! Thanks for sharing your experience. 🌟");

   // redirect back to the listing's show page so they can see their review
   res.redirect(`/listings/${listing._id}`);
}

module.exports.destroyReview = async(req, res) => {
    let { id, reviewId } = req.params;
   
    // now we have to delete the review from review array as well in the listing
    // for this we are going to use an special operator of mongoose which is $pull operator
    // it bascially removes the element from the array which matches the condition
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } }); // here we are finding the listing by id 
    // and then we are updating the reviews array by pulling the review id which we want to delete

     await Review.findByIdAndDelete(reviewId); // here from review id we are finding the review and deleting it from the database
     req.flash("success", "Review deleted successfully.");

    res.redirect(`/listings/${id}`);
}
// basically in this file we are going to store all the callBack function which we use in 
// routes/listings.js

const { generateListingDescription } = require("../utils/aiService");
const analyzeReviewsAI = require("../utils/analyzeReviews.js"); // naya helper function
const Listing = require("../modules/listing");
const Booking = require("../modules/booking.js");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req, res) => {
    const { category } = req.query; // 1. Grabs ?category=mountains from the URL
    let allListings;

    if (category) {
        allListings = await Listing.find({ category }); // 2. Filters database
    } else {
        allListings = await Listing.find(); // 3. Defaults to all listings
    }

    // 4. Passes BOTH the filtered listings AND the active category string to your EJS file
    res.render("listings/index.ejs", { allListings, category }); 
};

module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs")
};

module.exports.showListing = async (req, res) => {
    // first extract the id
    let { id } = req.params;
    const listing = await Listing.findById(id)
    .populate({
        path : "reviews",
        populate : {
            path: "author",
        }
    })
    .populate("owner"); // here we are finding our data of listing by id and storing in the listing variable
    // and passing in
    if(!listing) {
        req.flash("error", "Listing not found!");
       return  res.redirect("/listings");
    }

    // check if the current logged-in user has already booked this listing
    let existingBooking = null;
    if (req.user) {
        existingBooking = await Booking.findOne({
            listing: listing._id,
            user: req.user._id,
            status: "confirmed",
        });
    }


    res.render("listings/show.ejs", { listing , existingBooking });
}

module.exports.createListing = async (req, res) => {

    let coordinates = await geocodingClient
    .forwardGeocode({ // forward geocoding means when we pass name of
        // or location of some place it gets the coordinates of that place so that we can pass
        // these coordinates in map
        query: req.body.listing.location,
        limit: 1
        })
        .send();
        
    let url = req.file.path;
    let filename = req.file.filename;
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = { url, filename };

    // storing map coordinates
    newListing.geometry = coordinates.body.features[0].geometry;

    let lis = await newListing.save();
    console.log(lis);
    
    req.flash("success", "Your listing is live! Travellers can now discover it. 🏡");
    res.redirect("/listings");
};

module.exports.renderEditForm = async(req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
     if(!listing) {
        req.flash("error", "Listing not found!");
       return  res.redirect("/listings");
    }
    res.render("listings/edit.ejs", { listing })  
}

module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing }, { runValidators: true });

    if (typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = { url, filename };
    }

    // re-geocode in case location changed
    let geoData = await geocodingClient
      .forwardGeocode({
        query: req.body.listing.location,
        limit: 1,
      })
      .send();

    listing.geometry = geoData.body.features[0].geometry;

    await listing.save();
    req.flash("success", "Changes saved! Your listing looks great. ✨");
    res.redirect(`/listings/${id}`);
};


// Ai
// basically we are trying to fetch the data which is title, location and des from req body
// and then we check if they are not present then we sends one error meassage 
// and if they are present then we call the generateListingDescription function 
// which is present in utils/aiService.js
module.exports.generateDescription = async (req, res) => {
  try {
    const { title, location, category } = req.body;
    if (!title || !location || !category) {
      return res.status(400).json({ error: "Missing fields" });
    }
    const description = await generateListingDescription({ title, location, category });
    res.json({ description });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "AI generation failed" });
  }
};

module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Listing removed successfully.");
    res.redirect("/listings")
};

module.exports.analyzeReviews = async (req, res) => {
    const { id } = req.params;

    // Step 1: Listing nikalo aur uske reviews populate karo
    const listing = await Listing.findById(id).populate("reviews");

    if (!listing) {
        throw new ExpressError(404, "Listing not found");
    }

    if (listing.reviews.length === 0) {
        // Koi review nahi hai to seedha bata do
        return res.json({ hasReviews: false });
    }

    // Step 2: Average rating nikalna
    const totalRating = listing.reviews.reduce((sum, r) => sum + r.rating, 0);
    const averageRating = (totalRating / listing.reviews.length).toFixed(1);

    // Step 3: Sirf comment text nikalna, empty comments hata dena
    const comments = listing.reviews.map((r) => r.comment).filter(Boolean);

    if (comments.length === 0) {
        // Sirf rating diya, comment nahi likha kisi ne
        return res.json({
            hasReviews: true,
            averageRating,
            totalReviews: listing.reviews.length,
            summary: "Logo ne rating di hai lekin koi detailed comment nahi likha."
        });
    }

    // Step 4: AI se analysis karwana
    const analysis = await analyzeReviewsAI(comments);

    // Step 5: Response bhejna
    res.json({
        hasReviews: true,
        averageRating,
        totalReviews: listing.reviews.length,
        ...analysis
    });
};
// const mongoose = require('mongoose');
// const initData = require("./data.js");
// const Listing = require("../modules/listing.js");

// main()
//     .then(() => {
//         console.log("connection successfull");
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// async function main() {
//     await mongoose.connect('mongodb://127.0.0.1:27017/roamio');
// }

// // initiliaze function
// const initDB = async() => {
//     // first delete the data which is already present in our dataBase
//     await Listing.deleteMany({});
//     initData.data = initData.data.map((obj) => ({ ...obj, owner: "6a2683d14ff8296c1a381e63" }));
//     await Listing.insertMany(initData.data);
//     console.log("initiliazing database")
// }

// // call the function initDB so that our dataBase got initiliazd
// initDB();


if (process.env.NODE_ENV != "production") {
    require("dotenv").config({ path: require("path").join(__dirname, "..", ".env") });
}

const mongoose = require('mongoose');
const initData = require("./data.js");
const Listing = require("../modules/listing.js");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

main()
    .then(() => {
        console.log("connection successfull");
    })
    .catch((err) => {
        console.log(err);
    })

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/roamio');
}

// initiliaze function
const initDB = async() => {
    // first delete the data which is already present in our dataBase
    await Listing.deleteMany({});

    // loop through each listing, geocode its location, and attach geometry + owner
    for (let obj of initData.data) {
        obj.owner = "6a2683d14ff8296c1a381e63";

        try {
            let response = await geocodingClient
                .forwardGeocode({
                    query: `${obj.location}, ${obj.country}`,
                    limit: 1
                })
                .send();

            obj.geometry = response.body.features[0].geometry;
        } catch (err) {
            console.log(`Geocoding failed for ${obj.location}, ${obj.country}: ${err.message}`);
            obj.geometry = { type: "Point", coordinates: [0, 0] }; // fallback
        }
    }

    await Listing.insertMany(initData.data);
    console.log("initiliazing database")
}

// call the function initDB so that our dataBase got initiliazd
initDB();
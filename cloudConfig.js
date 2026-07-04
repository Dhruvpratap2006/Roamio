const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// config means tie up means here we are going to tie up the 
// cloudinary with backend
// for this we nned cloud_name , api key and api_secret from env file
cloudinary.config({
    cloud_name : process.env.CLOUD_NAME, // by default in config we gave the name cloud_name
    api_key : process.env.CLOUD_API_KEY, // by default in config we gave the name api_key
    api_secret : process.env.CLOUD_API_SECRET // by default in config we gave the name api_secret
}) 

// now we are going to make a storage  means basically we have make account on cloudinary but to store 
// images we need folder

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'roamio-DEV',
    allowedFormats: ["png", "jpg", "jpeg"],
  },
});

module.exports = {
    cloudinary, 
    storage,
}; // now we are going to use thisd in listing.js


const cloudinary = require("cloudinary").v2;
// const multerStorage = multer.memoryStorage(); // Cloudinary stores images in memory

// const upload = multer({ storage: multerStorage });
// Configure Cloudinary with your credentials
cloudinary.config({
  cloud_name: "ddeejf7bn", // Replace with your Cloudinary cloud name
  api_key: "242988242176999", // Replace with your Cloudinary API key
  api_secret: "1hz0xNzrPdDMt3kjenofc8lPum8", // Replace with your Cloudinary API secret
});

module.exports = cloudinary;

const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");

// Cloudinary storage configuration
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "zomato-events", // Folder in Cloudinary
    allowed_formats: ["jpg", "jpeg", "png", "pdf"], // Allowed file formats
  },
});

const upload = multer({ storage });

module.exports = upload;

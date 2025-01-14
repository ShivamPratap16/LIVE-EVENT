const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  contactName: { type: String, required: true },
  contactNumber: { type: String, required: true },
  eventName: { type: String, required: true },
  eventCategory: { type: String, required: true },
  panCard: { type: String, required: true },
  gstCertificate: { type: String, required: true },
  isApproved: { type: Boolean, default: false },
});

module.exports = mongoose.model("Event", eventSchema);

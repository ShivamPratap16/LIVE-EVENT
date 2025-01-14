const express = require("express");
const { createEvent, getEventById, getEvents, approveEvent, rejectEvent } = require("../controllers/eventController");
const upload = require("../middlewares/cloudinaryUpload");
const router = express.Router();

// Route to create an event with file upload (PAN and GST certificate)
router.post(
  "/events",
  upload.fields([
    { name: "panCard", maxCount: 1 },
    { name: "gstCertificate", maxCount: 1 },
  ]),
  createEvent
);

// Route to get all events
router.get("/events", getEvents);

// Route to get a single event by ID
router.get("/events/:id", getEventById);

// Route to approve an event
router.patch("/events/:id/approve", approveEvent);

// Route to reject an event
router.post("/events/:id/reject", rejectEvent);

module.exports = router;

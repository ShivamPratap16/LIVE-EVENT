const Event = require("../models/Event");

exports.createEvent = async (req, res) => {
  try {
    const {
      contactName,
      contactNumber,
      eventName,
      eventCategory,
    } = req.body;

    // Ensure files are uploaded
    if (!req.files || !req.files.panCard || !req.files.gstCertificate) {
      return res.status(400).json({ message: "PAN Card and GST Certificate are required" });
    }

    const panCardUrl = req.files.panCard[0].path; // Cloudinary URL for PAN Card
    const gstCertificateUrl = req.files.gstCertificate[0].path; // Cloudinary URL for GST Certificate

    const newEvent = new Event({
      contactName,
      contactNumber,
      eventName,
      eventCategory,
      panCard: panCardUrl,
      gstCertificate: gstCertificateUrl,
    });

    await newEvent.save();
    res.status(201).json({ message: "Event created successfully", event: newEvent });
  } catch (error) {
    res.status(500).json({ message: "Error creating event", error });
  }
};

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: "Error fetching events", error });
  }
};

exports.approveEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findByIdAndUpdate(id, { isApproved: true }, { new: true });
    if (!event) return res.status(404).json({ message: "Event not found" });
    res.status(200).json({ message: "Event approved", event });
  } catch (error) {
    res.status(500).json({ message: "Error approving event", error });
  }
};
exports.getEventById = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findById(id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: "Error fetching event", error });
  }
};
exports.rejectEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }

    event.isApproved = false;
    await event.save();
    res.status(200).json({ message: "Event rejected successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to reject event" });
  }
};
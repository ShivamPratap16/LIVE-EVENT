import React, { useState } from "react";
import "./ListEvent.css";

const ListEvent = () => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    contactName: "",
    contactNumber: "",
    eventName: "",
    eventCategory: "",
    
    panCard: null,
    GStcertifcate: null,
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNextStep = (event) => {
    event.preventDefault();
    setStep(step + 1);
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      setFormData({ ...formData, [name]: file });
      setError("");
    } else {
      setError("Please upload a valid JPG or PNG file.");
    }
  };

  const handleCategoryChange = (event) => {
    setFormData({ ...formData, eventCategory: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare form data for submission
    const formDataToSend = new FormData();
    formDataToSend.append("contactName", formData.contactName);
    formDataToSend.append("contactNumber", formData.contactNumber);
    formDataToSend.append("eventName", formData.eventName);
    formDataToSend.append("eventCategory", formData.eventCategory);

    // Add files to the form data
    if (formData.panCard) {
      formDataToSend.append("panCard", formData.panCard);
      console.log(formData.panCard);
    }
    if (formData.GStcertifcate) {
      formDataToSend.append("GStcertifcate", formData.GStcertifcate);
      console.log(formData.GStcertifcate);
    }
console.log(formDataToSend);
    try {
      // Send data to the backend (assuming your backend is running at http://localhost:5000)
      const response = await fetch("http://localhost:5000/events", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Event submitted successfully:", data);
        alert("Event Details Submitted Successfully!");
        setIsSubmitted(true);
      } else {
        const errorData = await response.json();
        console.error("Error submitting event:", errorData);
        alert("Event Details Submitted Successfully.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting event details.");
    }
  };

  return (
    <div className="event-category-form">
      <div className="logo-container1">
        <span className="zomato-logo1">zomato</span>
        <span className="live-text1">LIVE</span>
      </div>

      {isSubmitted ? (
        <div className="thank-you-message">
          <h2>Thanks for sharing your event details!</h2>
          <p>Our team will reach out to you shortly to help bring your event to life✨</p>
        </div>
      ) : (
        <>
          {step === 1 && (
            <div className="form-step">
              <h2>1 → Contact Name*</h2>
              <form onSubmit={handleNextStep}>
                <input
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleInputChange}
                  placeholder="Enter Contact Name"
                  required
                />
                <button type="submit">OK</button>
              </form>
            </div>
          )}

          {step === 2 && (
            <div className="form-step">
              <h2>2 → Contact Number*</h2>
              <p>Provide a number where we can reach you.</p>
              <form onSubmit={handleNextStep}>
                <input
                  type="text"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  placeholder="Enter Contact Number"
                  required
                />
                <button type="submit">OK</button>
              </form>
            </div>
          )}

          {step === 3 && (
            <div className="form-step">
              <h2>3 → Event Name*</h2>
              <p>What is the name of your event?</p>
              <form onSubmit={handleNextStep}>
                <input
                  type="text"
                  name="eventName"
                  value={formData.eventName}
                  onChange={handleInputChange}
                  placeholder="Enter Event Name"
                  required
                />
                <button type="submit">OK</button>
              </form>
            </div>
          )}

          {step === 4 && (
            <div className="form-step">
              <h2>4 → Event Category*</h2>
              <p>What is the genre of your event?</p>
              <form onSubmit={handleNextStep}>
                <div>
                  <input
                    type="radio"
                    id="activities"
                    value="Activities"
                    name="eventCategory"
                    onChange={handleCategoryChange}
                  />
                  <label htmlFor="activities">Activities</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="comedy"
                    value="Comedy"
                    name="eventCategory"
                    onChange={handleCategoryChange}
                  />
                  <label htmlFor="comedy">Comedy</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="culture"
                    value="Culture"
                    name="eventCategory"
                    onChange={handleCategoryChange}
                  />
                  <label htmlFor="culture">Culture</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="music"
                    value="Music"
                    name="eventCategory"
                    onChange={handleCategoryChange}
                  />
                  <label htmlFor="music">Music</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="screening"
                    value="Screening"
                    name="eventCategory"
                    onChange={handleCategoryChange}
                  />
                  <label htmlFor="screening">Screening</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="workshops"
                    value="Workshops"
                    name="eventCategory"
                    onChange={handleCategoryChange}
                  />
                  <label htmlFor="workshops">Workshops</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="seminars"
                    value="Seminars"
                    name="eventCategory"
                    onChange={handleCategoryChange}
                  />
                  <label htmlFor="seminars">Seminars</label>
                </div>
                <button type="submit">OK</button>
              </form>
            </div>
          )}

          {step === 5 && (
            <div className="form-step">
              <h2>5 → Upload PAN Card*</h2>
              <p>Please upload an image of your PAN card.</p>
              <form onSubmit={handleNextStep}>
                <div className="upload-area">
                  <label htmlFor="fileUpload" className="upload-box">
                    <input
                      id="fileUpload"
                      type="file"
                      name="panCard"
                      accept="image/jpeg, image/png"
                      onChange={handleFileChange}
                      hidden
                    />
                    <div className="upload-content">
                      {formData.panCard ? (
                        <p>{formData.panCard.name}</p>
                      ) : (
                        <p>Choose file or drag here</p>
                      )}
                    </div>
                  </label>
                  {error && <p className="error">{error}</p>}
                </div>
                <button type="submit">Next</button>
              </form>
            </div>
          )}

          {step === 6 && (
            <div className="form-step">
              <h2>6 → Upload GST Certificate*</h2>
              <p>Please upload an image of your GST certificate.</p>
              <form onSubmit={handleSubmit}>
                <div className="upload-area">
                  <label htmlFor="fileUpload" className="upload-box">
                    <input
                      id="fileUpload"
                      type="file"
                      name="GStcertifcate"
                      accept="image/jpeg, image/png"
                      onChange={handleFileChange}
                      hidden
                    />
                    <div className="upload-content">
                      {formData.GStcertifcate ? (
                        <p>{formData.GStcertifcate.name}</p>
                      ) : (
                        <p>Choose file or drag here</p>
                      )}
                    </div>
                  </label>
                  {error && <p className="error">{error}</p>}
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ListEvent;

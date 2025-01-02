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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Final Form Data:", formData);
    alert("Event Details Submitted Successfully!");
    setIsSubmitted(true);
  };
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
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
                name="category"
                onChange={handleCategoryChange}
              />
              <label htmlFor="activities">Activities</label>
            </div>
            <div>
              <input
                type="radio"
                id="comedy"
                value="Comedy"
                name="category"
                onChange={handleCategoryChange}
              />
              <label htmlFor="comedy">Comedy</label>
            </div>
            <div>
              <input
                type="radio"
                id="culture"
                value="Culture"
                name="category"
                onChange={handleCategoryChange}
              />
              <label htmlFor="culture">Culture</label>
            </div>
            <div>
              <input
                type="radio"
                id="music"
                value="Music"
                name="category"
                onChange={handleCategoryChange}
              />
              <label htmlFor="music">Music</label>
            </div>
            <div>
              <input
                type="radio"
                id="screening"
                value="Screening"
                name="category"
                onChange={handleCategoryChange}
              />
              <label htmlFor="screening">Screening</label>
            </div>
            <div>
              <input
                type="radio"
                id="workshops"
                value="Workshops"
                name="category"
                onChange={handleCategoryChange}
              />
              <label htmlFor="workshops">Workshops</label>
            </div>
            <div>
              <input
                type="radio"
                id="seminars"
                value="Seminars"
                name="category"
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
          <h2>6 → Upload GSt certifcate*</h2>
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
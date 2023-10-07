import React, { useState } from "react";

export default function Unauthorised() {
  const [formData, setFormData] = useState({
    proprietorName: "",
    workshopName: "",
    primePhoneNumber: "",
    alternatePhoneNumber: "",
    timings: "",
    location: "",
    photos: null, // For file input
  });

  // Function to handle form input changes
  const handleInputChange = (event) => {
    const { name, value, type, files } = event.target;

    // For file input, update formData differently
    if (type === "file") {
      setFormData({
        ...formData,
        photos: files[0], // Update with the selected file(s)
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform any action with the form data here
    console.log(formData);
  };

  return (
    <div className="container mt-4 d-flex justify-content-center align-items-center">
      <div className="column">
        <h2 className="text-center">Contact Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="proprietorName" className="form-label">
              Proprietor Name
            </label>
            <input
              type="text"
              className="form-control"
              id="proprietorName"
              name="proprietorName"
              value={formData.proprietorName}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="workshopName" className="form-label">
              Workshop Name
            </label>
            <input
              type="text"
              className="form-control"
              id="workshopName"
              name="workshopName"
              value={formData.workshopName}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="primePhoneNumber" className="form-label">
              Prime Phone Number
            </label>
            <input
              type="text"
              className="form-control"
              id="primePhoneNumber"
              name="primePhoneNumber"
              value={formData.primePhoneNumber}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="alternatePhoneNumber" className="form-label">
              Alternate Phone Number
            </label>
            <input
              type="text"
              className="form-control"
              id="alternatePhoneNumber"
              name="alternatePhoneNumber"
              value={formData.alternatePhoneNumber}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="timings" className="form-label">
              Timings
            </label>
            <input
              type="text"
              className="form-control"
              id="timings"
              name="timings"
              value={formData.timings}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="location" className="form-label">
              Location
            </label>
            <input
              type="text"
              className="form-control"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="photos" className="form-label">
              Photos
            </label>
            <input
              type="file"
              className="form-control-file"
              id="photos"
              name="photos"
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

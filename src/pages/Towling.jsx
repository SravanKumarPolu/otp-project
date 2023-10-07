import React, { useState } from "react";

export default function Towling() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    personPhotos: null,
    bikeRegistrationNo: "",
    bikePhotos: null,
    licensePhoto: null,
    aadharPhoto: null,
    rcCopyPhoto: null,
  });

  // Function to handle form input changes
  const handleInputChange = (event) => {
    const { name, value, type, files } = event.target;

    // For file input, update formData differently
    if (type === "file") {
      setFormData({
        ...formData,
        [name]: files[0], // Update with the selected file(s)
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
        <h3 className="text-center bg-success text-white border rounded">
          Pickup & Drop Registration
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">
              Phone number
            </label>
            <input
              type="text"
              className="form-control"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="personPhotos" className="form-label">
              Photos of person
            </label>
            <input
              type="file"
              className="form-control-file"
              id="personPhotos"
              name="personPhotos"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="bikeRegistrationNo" className="form-label">
              Bike Registration No
            </label>
            <input
              type="text"
              className="form-control"
              id="bikeRegistrationNo"
              name="bikeRegistrationNo"
              value={formData.bikeRegistrationNo}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="bikePhotos" className="form-label">
              Photos of bike
            </label>
            <input
              type="file"
              className="form-control-file"
              id="bikePhotos"
              name="bikePhotos"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="licensePhoto" className="form-label">
              License Photo
            </label>
            <input
              type="file"
              className="form-control-file"
              id="licensePhoto"
              name="licensePhoto"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="aadharPhoto" className="form-label">
              Aadhar Photo
            </label>
            <input
              type="file"
              className="form-control-file"
              id="aadharPhoto"
              name="aadharPhoto"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="rcCopyPhoto" className="form-label">
              RC Copy Photo
            </label>
            <input
              type="file"
              className="form-control-file"
              id="rcCopyPhoto"
              name="rcCopyPhoto"
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

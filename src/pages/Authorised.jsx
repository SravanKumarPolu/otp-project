import React, { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
export default function Authorised() {
  const [formData, setFormData] = useState({
    mobileNo: "",
    alternateMobileNo: "",
    timings: "",
    location: "",
    managerName: "",
  });

  // Function to handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform any action with the form data here
    console.log(formData);
  };

  return (
    <div className="container mt-4 d-flex justify-content-center align-items-center ">
      <div className="column ">
        <BsPersonCircle className="mx-auto d-flex content-center" size={50} />
        <h2 className="text-center">Service Center Name</h2>
        <form
          onSubmit={handleSubmit}
          className="container  justify-content-center align-items-center "
        >
          <div className="mb-3">
            <label htmlFor="mobileNo" className="form-label">
              Mobile No
            </label>
            <input
              type="text"
              className="form-control"
              id="mobileNo"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="alternateMobileNo" className="form-label">
              Alternate Mobile No
            </label>
            <input
              type="text"
              className="form-control"
              id="alternateMobileNo"
              name="alternateMobileNo"
              value={formData.alternateMobileNo}
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
            <label htmlFor="managerName" className="form-label">
              Manager Name
            </label>
            <input
              type="text"
              className="form-control"
              id="managerName"
              name="managerName"
              value={formData.managerName}
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
              // Handle file input if needed
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
